#!/usr/bin/env node

/* eslint-disable */
require('dotenv').config()

const AWS = require('aws-sdk')
const s3 = require('s3')
const chalk = require('chalk')
const assign = require('lodash.assign')

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
        const isStaticFolder = /\/static\//g.test(filepath)
        callback(null, isStaticFolder 
          ? {
            CacheControl: 'public,max-age=31536000,immutable',
          }
          : { 
            ACL: 'public-read',
            CacheControl: 'public,max-age=0,must-revalidate',
          }
        )
      }
    })
    
    uploader.on('error', err => reject(err.message))
    
    uploader.on('end', () => {
      console.log(chalk.green('✔ Success uploading files to production bucket!')) 
      resolve()
    })
  })

const invalidateCache = () => 
  new Promise((resolve, reject) => {
    const cloudfront = new AWS.CloudFront()
    const ids = [ 
      process.env.CLOUDFRONT_DISTRIBUTION_ID_01, 
      process.env.CLOUDFRONT_DISTRIBUTION_ID_02
    ]

    ids.reduce((promiseChain, ids) => (
      promiseChain.then(() => new Promise((resolve, reject) => {
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
          if (err) {
            reject(err.message)
          } else {
            console.log(chalk.green(`✔ ${id} cache invalidated!`))
            resolve()
          }
        })
      })), 
      resolve())
    )
  })

uploadFiles()
  //.then(invalidateCache)
  .then(() => process.exit(0))
  .catch(err => console.log(chalk.red(`✗ ${err}`)))
