CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers(
    Id INT AUTO_INCREMENT NOT NULL PRIMARY KEY, 
    burger_name VARCHAR(50),
    devoured BOOLEAN DEFAULT false
);