CREATE DATABASE marketplace_app;
\c marketplace_app

CREATE TABLE users(
  id SERIAL PRIMARY KEY,
  avatar TEXT,
  name TEXT,
  email TEXT, 
  password_digest TEXT
);

CREATE TABLE products(
  id SERIAL PRIMARY KEY,
  name TEXT,
  image TEXT,
  price TEXT,
  description TEXT
);