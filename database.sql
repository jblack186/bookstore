CREATE DATABASE bookstore;

-- CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE users(
user_id uuid DEFAULT uuid_generate_v4(),
user_name VARCHAR(255) NOT NULL,
user_email VARCHAR(255) NOT NULL UNIQUE,
user_password VARCHAR(255) NOT NULL,
PRIMARY KEY(user_id)
);

INSERT INTO users (user_name, user_email, user_password) VALUES ('jacob', 'jacobly213@gmail.com', 'feefkthl8822');

CREATE TABLE choices (
choices_id SERIAL,
user_id UUID,
choice text,
PRIMARY KEY (choices_id),
FOREIGN KEY (user_id) REFERENCES users(user_id)
);

insert into users (user_name, user_email, user_password) values ('KJacob', 'kjacofeefb@gmail.com', 'kthl8822');


insert into choices (user_id, choice) values ('0cbc3f0e-c6a1-496d-9acd-bf13d970d690', 'science, education, astronomy');
