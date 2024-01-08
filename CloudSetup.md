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
