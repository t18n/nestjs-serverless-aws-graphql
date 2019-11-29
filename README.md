# An example of how to deploy NestJS API to Lambda function

## Prerequisites

AWS account with IAM Group policy setup including:

- S3
- CloudFormation
- Lambda
- API Gateway
  Give all policy above full permission for the sake of simplicity. Keep in mind that you can always tighten the permission group for each user.

## Deploy

- To deploy/update dev stack: `PROFILE=<aws-profile> yarn deploy`
- To deploy/update prod stack: `PROFILE=<aws-profile> yarn deploy:prod`
