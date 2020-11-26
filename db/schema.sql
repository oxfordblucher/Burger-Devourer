DROP DATABASE IF EXISTS burgers_DB;

CREATE DATABASE burgers_DB;

USE burgers_DB;

CREATE TABLE burgers (
    id INT AUTO_INCREMENT,
    burger_name VARCHAR(45) NOT NULL,
    devoured BOOLEAN default false,
    PRIMARY KEY(id)
);

