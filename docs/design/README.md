# Проєктування бази даних

В рамках проекту розробляється: 
- модель бізнес-об'єктів 
- ER-модель
- реляційна схема

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
  Message "1, 1" - "0, *" Metadata
  
@enduml

## Relational Schema

<p align="center">
  <img src="./pictures/er_users.png" width="350" title="ER-diagrams">
</p>
<p align="center">
  <img src="./pictures/er_media-content.png" width="350" title="ER-diagrams">
</p>

## MySql realization 

### Users

```sql

CREATE TABLE `user` (
  `id` INT PRIMARY KEY AUTO INCREMENT,
  `name` VARCHAR(50),
  `email` VARCHAR(50),
  `password` VARCHAR(30),
  `photo` VARCHAR(100),
  `role` VARCHAR(20)
);

CREATE TABLE `request` (
  `id` INT PRIMARY KEY AUTO INCREMENT,
  `data` TEXT,
  `date` DATETIME,
  `status_active` BIT,
  `id_user` INT,
  FOREIGN KEY (`id_user`) REFERENCES `user`(`id`)
);

CREATE TABLE `report` (
  `id` INT PRIMARY KEY AUTO INCREMENT,
  `head` VARCHAR(50),
  `data` TEXT,
  `date` DATETIME,
  `status_active` BIT,
  `id_user` INT,
  FOREIGN KEY (`id_user`) REFERENCES `user`(`id`)
);

```

### Media-content

```sql
CREATE TABLE media_contents (
  id INT PRIMARY KEY AUTO INCREMENT,
  name VARCHAR(50),
  description VARCHAR(50)
);

CREATE TABLE posts (
  id INT PRIMARY KEY AUTO INCREMENT,
  head VARCHAR(50),
  data TEXT,
  id_media INT,
  FOREIGN KEY (id_media) REFERENCES media_contents(id)
);

CREATE TABLE movies (
  id INT PRIMARY KEY AUTO INCREMENT,
  movie_link VARCHAR(100),
  id_post INT,
  id_media INT,
  FOREIGN KEY (id_post) REFERENCES posts(id),
  FOREIGN KEY (id_media) REFERENCES media_contents(id)
);

CREATE TABLE diagrams (
  id INT PRIMARY KEY AUTO INCREMENT,
  name VARCHAR(50),
  data TEXT,
  id_media INT
  id_post INT,
  FOREIGN KEY (id_media) REFERENCES media_contents(id),
  FOREIGN KEY (id_post) REFERENCES posts(id)
);

CREATE TABLE mass_media (
  id INT PRIMARY KEY AUTO INCREMENT,
  name VARCHAR(50),
  data TEXT,
  id_diagram INT,
  FOREIGN KEY (id_diagram) REFERENCES diagrams(id)
);

CREATE TABLE source 
  id INT PRIMARY KEY AUTO INCREMENT,
  name VARCHAR(50),
  data TEXT,
  id_diagram INT,
  FOREIGN KEY (id_diagram) REFERENCES diagrams(id)
);

CREATE TABLE links (
  id INT PRIMARY KEY AUTO INCREMENT,
  link VARCHAR(100),
  id_post INT,
  id_media INT,
  FOREIGN KEY (id_post) REFERENCES posts(id),
  FOREIGN KEY (id_media) REFERENCES media_contents(id)
);

CREATE TABLE pictures (
  id INT PRIMARY KEY AUTO INCREMENT,
  picture_path VARCHAR(100),
  id_post INT
  id_media INT,
  FOREIGN KEY (id_post) REFERENCES posts(id),
  FOREIGN KEY (id_media) REFERENCES media_contents(id)
);

```
