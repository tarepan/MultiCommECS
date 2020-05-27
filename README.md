# MultiComm

Multi-Service Communication on AWS ECS.

## Architecture

MainService <--WebSocket--> WSSService

MainService = MainContainer + loggingSidecar  
WSSService = WSSContainer + loggingSidecar

Keys are prepared with ParameterStore&Env

### Networking

- MainService: main.local.multicomm
- WSSService: wss.local.multicomm

## Setup

(first time)

1. Prepare an ECS Cluster (proper VPC security) and Services (main & wss).
2. Prepare ECR registries (main, wss, sidecar)
3. Prepare IAM (ECS TaskExecution role with cloudwatch log settings).
4. Prepare ParameterStore.
5. Prepare AWS access key & secrets in GitHub

(reStart)  
Set task number in Service = 1.

### push taskDef

command: [`aws cli register-task-definition`](https://docs.aws.amazon.com/cli/latest/reference/ecs/register-task-definition.html)  
this case: `aws ecs register-task-definition --cli-input-json file://./src/task-def-wss.json`

### push cotainer to ECR

password for docker login: `aws ecr get-login-password --region "ap-northeast-1" --profile globaladmin`  
docker login: `docker login --username AWS -p <password> "$(aws sts get-caller-identity --query Account --output text).dkr.ecr.ap-northeast-1.amazonaws.com"`
