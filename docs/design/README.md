# Проєктування бази даних

## ER-Model

@startuml
  entity User {
    id: int
    name: text
    login: text
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
  ScraperInstance "1, 1" - "0, *" Message
  ScraperInstance "1, 1" - "1, 1" ScraperInstance : next
  Message "1, 1" - "0, *" Metadata
  
@enduml

## Relational Schema

<p align="center">
  <img src="./pictures/er_diagram.png" width="350" title="ER-diagram">
</p>