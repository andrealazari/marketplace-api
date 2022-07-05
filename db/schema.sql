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
  item TEXT,
  image TEXT,
  price TEXT,
  description TEXT,
  userid TEXT,
  avatar TEXT,
  username TEXT
);

CREATE TABLE carts(
  id SERIAL PRIMARY KEY,
  item TEXT,
  price TEXT,
  item_id TEXT,
  image TEXT,
  description TEXT,
  userid TEXT
);

CREATE TABLE purchases(
  id SERIAL PRIMARY KEY,
  item TEXT,
  price TEXT,
  item_id TEXT,
  image TEXT,
  description TEXT,
  userid TEXT
);