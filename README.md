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
Prepare an ECS Cluster and Services (Main & WSS).  
Prepare ECR registries.  
Prepare IAM (ECS TaskExecution role with cloudwatch log settings).
Prepare ParameterStore.

(reStart)  
Set task number in Service = 1.
