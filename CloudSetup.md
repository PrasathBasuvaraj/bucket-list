# Cloud Setup - Bucket List

This document provides the information required to configure and deploy the application into AWS Cloud.

## Create and Configure AWS S3

Run `aws s3 ls` to view list of buckets in your account

Run the below command to create a bucket on your preferred name

```
aws s3api create-bucket \
    --bucket hyppar-bucket-list \
    --region ap-south-1 \
    --create-bucket-configuration LocationConstraint=ap-south-1
```

## Update bucket permissions

Run the below command to disable 'Block all public access' for the bucket

```
aws s3api put-public-access-block \
    --bucket hyppar-bucket-list \
    --public-access-block-configuration "BlockPublicAcls=false,IgnorePublicAcls=false,BlockPublicPolicy=false,RestrictPublicBuckets=false"
```

## CloudFront setup

- Run `aws cloudfront list-distributions` to list distribution

- Run `aws cloudfront create-distribution --distribution-config file://cf_bucket_list.json` to create a cloud front distribution

- Run the below command to delete a distribution using it's id

```
  aws cloudfront delete-distribution --id E3AC6KAVCXV8WA --if-match E3AC6KAVCXV8WA
```
