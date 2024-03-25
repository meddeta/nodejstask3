
require('dotenv').config();

const express = require('express');

const app = express();

const port = 3000;

// mocked login info

const credentials = {

  username: process.env.USERNAME,

  password: process.env.PASSWORD,
};

// Import users data

const users = require('./users.json');


// Login endpoint

app.get('/login', (req, res) => {

  res.json(credentials);

});

// Users endpoint

app.get('/users', (req, res) => {

  res.json(users);

});

app.listen(port, () => {

  console.log(`Example app listening at http://localhost:${port}`);
  
});
