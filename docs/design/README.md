# Проєктування бази даних

В рамках проекту розробляється: 
- модель бізнес-об'єктів 
- ER-модель
- реляційна схема

## ER-Model

### User

@startuml

entity user {
	id:INT
	name:VARCHAR
	email:VARCHAR
	password:VARCHAR
	photo:VARCHAR
	role:VARCHAR
}

entity report {
    id:INT
    head:VARCHAR
    description:TEXT
    date:DATETIME
    status_active:BIT
    id_user:INT
}

entity question {
    id:INT
    data:TEXT
    date:DATETIME
    status_active:BIT
    id_user:INT
}

question "0,*" --> "1,1" user
report "0,*" --> "1,1" user

@enduml

### Media-content

@startuml

  entity Billing {
    description
  }

  entity Message {
  data
  }
  
  entity Metadata {
    key
    value
  }
  
  entity Source {
    url: uri-reference
  }
  
  entity ScraperType {
    repo: uri-reference
  }
  
  entity ScraperInstance {
    endPoint: uri-reference
  }
  
  entity Task {
    data
  }
  
  entity ServiceType {
    name
    description
    repo: uri-reference
  }

  entity ServiceInstance {
    endPoint: uri-reference
  }
  
  ServiceInstance "0,*" --> "1,1" ServiceType
  ServiceInstance "1,1" -> "1,1" ServiceInstance : next 
  
  
  Source "0,*" --> "1,1" ScraperType 
  ScraperInstance "0,*" --> "1,1" ScraperType
  
  Message "0,*" --> "1,1" ScraperInstance
  
  Metadata "1, 1" --> "1, 1" Message
  
  Task "0, *" --> "1,1" Source
  Task "0, *" -> "1,1" ScraperInstance
  
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
