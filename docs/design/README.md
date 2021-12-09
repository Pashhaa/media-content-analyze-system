# Проєктування бази даних

## Business-Model

@startuml
  entity User
  entity User.id
  entity User.name
  entity User.email
  entity User.password

  User *-- User.id
  User *-- User.name
  User *-- User.email
  User *-- User.password

  entity Dashboard
  entity Dashboard.id
  entity Dashboard.type

  Dashboard *-- Dashboard.id
  Dashboard *-- Dashboard.type

  entity DataStreamDashBoard
  entity DataStreamDashBoard.id
  entity DataStreamDashBoard.name
  entity DataStreamDashBoard.description
  entity DataStreamDashBoard.entryPoint

  DataStreamDashBoard *-- DataStreamDashBoard.id
  DataStreamDashBoard *-- DataStreamDashBoard.name
  DataStreamDashBoard *-- DataStreamDashBoard.description
  DataStreamDashBoard *-- DataStreamDashBoard.entryPoint

  entity ServiceType
  entity ServiceType.id
  entity ServiceType.type
  entity ServiceType.description
  entity ServiceType.repo

  ServiceType *-- ServiceType.id
  ServiceType *-- ServiceType.type
  ServiceType *-- ServiceType.description
  ServiceType *-- ServiceType.repo

  entity ServiceInstance
  entity ServiceInstance.id
  entity ServiceInstance.name
  entity ServiceInstance.endPoint

  ServiceInstance *-- ServiceInstance.id
  ServiceInstance *-- ServiceInstance.name
  ServiceInstance *-- ServiceInstance.endPoint

  entity DataStreamService
  entity DataStreamService.id
  entity DataStreamService.name
  entity DataStreamService.description
  entity DataStreamService.entryPoint

  DataStreamService *-- DataStreamService.id
  DataStreamService *-- DataStreamService.name
  DataStreamService *-- DataStreamService.description
  DataStreamService *-- DataStreamService.entryPoint

  entity Task
  entity Task.id
  entity Task.data

  Task *-- Task.id
  Task *-- Task.data

  entity Source
  entity Source.id
  entity Source.url
  entity Source.apiKey

  Source *-- Source.id
  Source *-- Source.url
  Source *-- Source.apiKey

  entity ScraperType
  entity ScraperType.id
  entity ScraperType.type
  entity ScraperType.repo

  ScraperType *-- ScraperType.id
  ScraperType *-- ScraperType.type
  ScraperType *-- ScraperType.repo

  entity ScraperInstance
  entity ScraperInstance.id
  entity ScraperInstance.data
  entity ScraperInstance.endPoint

  ScraperInstance *-- ScraperInstance.id
  ScraperInstance *-- ScraperInstance.data
  ScraperInstance *-- ScraperInstance.endPoint

  entity Message
  entity Message.id
  entity Message.data

  Message *-- Message.id
  Message *-- Message.data

  entity Metadata
  entity Metadata.id
  entity Metadata.key
  entity Metadata.value

  Metadata *-- Metadata.id
  Metadata *-- Metadata.key
  Metadata *-- Metadata.value

  User "1, 1" -- "0, *" Dashboard
  Dashboard "1, 1" -- "0, *" DataStreamDashBoard
  ServiceType "1, 1" -- "0, *" ServiceInstance
  ServiceInstance "1, 1" -- "0, *" DataStreamService
  Task "1, 1" -- "0, *" DataStreamDashBoard
  Task "1, 1" -- "0, *" DataStreamService
  Task "1, 1" -- "0, *" Source
  Task "1, 1" -- "0, *" ScraperInstance
  Source "1, 1" -- "0, *" ScraperType
  ScraperType "1, 1" -- "0, *" ScraperInstance
  ScraperInstance "1, 1" -- "0, *" Message
  ScraperInstance "1, 1" - "1, 1" ScraperInstance
  Message "1, 1" -- "0, *" Metadata
@enduml

## ER-Model

@startuml
  entity User {
    id: int
    name: text
    email: text
    password: text
  }
  
  entity DataStreamDashBoard { 
    id: int    
    name: text 
    description: text 
    entryPoint: int 
  }
  
  entity DataStreamService { 
    id: int    
    name: text 
    description: text 
    entryPoint: int 
  }
  
  entity Dashboard {
   id: int
   type: text
  }

  entity Message {
    id: int
    data: text
  }
  
  entity Metadata {
    id: int
    key: int
    value: text
  }
  
  entity Source {
    id: int
    url: uri-reference
    api-key: int
  }
  
  entity ScraperType {
    id: int
    type: text
    repo: uri-reference
  }
  
  entity ScraperInstance {
    id: int
    data: text
    endPoint: uri-reference
  }
  
  entity Task {
    id: int
    data: text
  }
  
  entity ServiceType {
    id: int
    type: text
    description: text
    repo: uri-reference
  }

  entity ServiceInstance {
    id: int
    name: text
    endPoint: uri-reference
  }
  
  User "1, 1" -- "0, *" Dashboard
  Dashboard "1, 1" -- "0, *" DataStreamDashBoard
  ServiceType "1, 1" -- "0, *" ServiceInstance
  ServiceInstance "1, 1" -- "0, *" DataStreamService
  Task "1, 1" -- "0, *" DataStreamDashBoard
  Task "1, 1" -- "0, *" DataStreamService
  Task "1, 1" -- "0, *" Source
  Task "1, 1" -- "0, *" ScraperInstance
  Source "1, 1" -- "0, *" ScraperType
  ScraperType "1, 1" -- "0, *" ScraperInstance
  ScraperInstance "1, 1" -- "0, *" Message
  ScraperInstance "1, 1" - "1, 1" ScraperInstance
  Message "1, 1" -- "0, *" Metadata
@enduml

## Relational Schema

<p align="center">
  <img src="./pictures/er-diagram.png" width="600" title="ER-diagram">
</p>