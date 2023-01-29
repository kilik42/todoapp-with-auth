CREATE DATABASE todoapp;

CREATE TABLE todos (
    id VARCHAR NOT NULL AUTO_INCREMENT,
    user_email VARCHAR(255) NOT NULL,
    title VARCHAR(30) NOT NULL,
    progress INT NOT NULL,
    date VARCHAR(300) NOT NULL,
    completed BOOLEAN NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE users (
   eamil VARCHAR(255) PRIMARY KEY,
   hashed_password VARCHAR(255) NOT NULL,

);
'
INSERT INTO todos (id, user_email, title, progress, date ) VALUES ('0', 'anima@test.com', 'first todo', 10, '2020-01-01');
INSERT INTO todos (id, user_email, title, progress, date ) VALUES ('1', 'akkk@test.com', 'second todo', 20, '2020-01-01');
INSERT INTO todos (id, user_email, title, progress, date ) VALUES ('2', 'kld@gmail.com', 'third todo', 30, '2020-01-01');

SELECT * FROM todos;

