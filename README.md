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
