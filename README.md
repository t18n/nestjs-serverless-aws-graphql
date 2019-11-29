# An example of how to deploy NestJS API to Lambda function

## Prerequisites

AWS account with IAM Group policy setup including:

- S3
- CloudFormation
- Lambda
- API Gateway
  Give all policy above full permission for the sake of simplicity. Keep in mind that you can always tighten the permission group for each user.

## Getting started

Run script below to instantly deploy this to your Lambda

```bash
git clone <nest-js-aws-lambda-repo>
yarn install
PROFILE=<your-aws-profile> yarn deploy:bucket
PROFILE=<your-aws-profile> yarn deploy
```
