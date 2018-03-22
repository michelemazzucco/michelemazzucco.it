#!/usr/bin/env node
/* eslint-disable */
require('dotenv').config()
const fs =require('fs')
const AWS = require('aws-sdk')
const s3 = require('s3')
const chalk = require('chalk')
const mime = require('mime-types')

AWS.config.apiVersions = { s3: '2006-03-01', cloudfront:'2017-03-25' }
AWS.config.update({ region: process.env.AWS_REGION })

const uploadFiles = () => 
  new Promise((resolve, reject) => {
    const s3Client = new AWS.S3()
    const config = { s3Client }
    const client = s3.createClient(config)
    const bucket = process.env.AWS_BUCKET
    const uploader = client.uploadDir({
      localDir: 'public',
      deleteRemoved: true,
      s3Params: { Bucket: bucket },
      
      getS3Params: (filepath, stat, callback) => {
        const isStaticFolder = /\/(static|images|favicons)\//g.test(filepath)
        const ContentType = mime.lookup(filepath)
        
        callback(null, isStaticFolder 
          ? { CacheControl: 'public,max-age=31536000,immutable' }
          : { CacheControl: 'public,max-age=0,must-revalidate', ACL: 'public-read' }
        )
      }
    })
    
    uploader.on('error', err => reject(err))
    
    uploader.on('end', () => {
      console.log(chalk.green('✔ SUCCESS: Files uploaded to production bucket')) 
      resolve()
    })
  })  

const invalidateCache = id => 
  new Promise((resolve, reject) => {
    const cloudfront = new AWS.CloudFront()

    const reference = Date.now()
    const invalidation = {
      DistributionId: id,
      InvalidationBatch: {
        CallerReference: reference.toString(),
        Paths: {
          Quantity: 1,
          Items: ['/*']
        }
      }
    }
    
    cloudfront.createInvalidation(invalidation, err => {
      if (err) reject(err)
      console.log(chalk.green(`✔ SUCCESS: Cache of ${id} invalidated`)) 
      resolve()
    })
  })

uploadFiles()
  .then(() => invalidateCache(process.env.CLOUDFRONT_DISTRIBUTION_ID_01))
  .then(() => invalidateCache(process.env.CLOUDFRONT_DISTRIBUTION_ID_02))
  .then(() => process.exit(0))
  .catch(err => console.log(chalk.red(`✗ ${err.message}`))) 
