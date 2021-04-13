CREATE DATABASE crud_node_mysql;

USE crud_node_mysql;

CREATE TABLE usuarios(

    id int not null auto_increment,
    nombre varchar(255) NOT NULL,
    email varchar(255) NOT NULL,
    estado tinyint DEFAULT 1,
    PRIMARY KEY(id)
);