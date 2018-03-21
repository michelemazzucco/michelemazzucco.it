#!/usr/bin/env node

/* eslint-disable */
require('dotenv').config()
const fs =require('fs')
/* eslint-disable */
const AWS = require('aws-sdk')
const s3 = require('s3')
const chalk = require('chalk')
const mime = require('mime-types')
const zlib = require('zlib')

AWS.config.apiVersions = { s3: '2006-03-01', cloudfront:'2017-03-25' }
AWS.config.update({ region: process.env.AWS_REGION })

const getFiles = dir =>
  fs.readdirSync(dir).reduce((arr, file) => {
    const path = `${dir}/${file}`
    if (fs.statSync(path).isDirectory()) {
      return arr.concat(getFiles(path))
    }
    return file.startsWith('.') ? [ ...arr ] : [...arr, path]
  }, [])

const uploadFiles = () => 
  new Promise((resolve, reject) => {
    const s3Client = new AWS.S3()
    const config = { s3Client }
    const client = s3.createClient(config)
    const Bucket = process.env.AWS_BUCKET
    const files = getFiles('./public').map(file => ({
      path: file,
      key: file.replace(/.*public\//, '').replace(/\/index.html$/, '/')
    }))

    files.forEach(({ path, key }, i) => {
      const isStaticFolder = /\/(images|favicon|static)\//g.test(path)
      const ContentType = mime.lookup(path)
      
      s3Client.putObject({
        Bucket,
        Key: key,
        Body: fs.readFileSync(path),
        ContentType,
        ACL: 'public-read',
        CacheControl: (isStaticFolder 
          ? 'public,max-age=31536000,immutable' 
          : 'public,max-age=0,must-revalidate'
        )
      }, e => e && console.log(e))

      if (i === (files.length - 1)) {
        console.log(chalk.green('✔ Files uploade!'))
        resolve()
      }
    })
  })

const invalidateCache = () => 
  new Promise((resolve, reject) => {
    const cloudfront = new AWS.CloudFront()
    const ids = [ 
      process.env.CLOUDFRONT_DISTRIBUTION_ID_01, 
      process.env.CLOUDFRONT_DISTRIBUTION_ID_02
    ]

    ids.forEach((id, i) => {
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
      
      cloudfront.createInvalidation(invalidation, err => err && reject(err.message))

      if (i === (ids.length - 1)) {
        console.log(chalk.green('✔ Cache invalidated!'))
        resolve()
      }
    })
  })

uploadFiles()
  .then(invalidateCache)
  .then(() => process.exit(0))
  .catch(err => console.log(chalk.red(`✗ ${err}`)))

//uploadFiles()
//  //.then(invalidateCache)
//  
//  
