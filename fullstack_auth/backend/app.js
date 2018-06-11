const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const user = require('./user');

const app = express();

const origin = process.env.MODE === 'production' ?
  'https://fa-frontend.herokuapp.com' :
  'http://localhost:1234';

app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors({ origin, credentials: true }));
app.use('/user', user);

app.use((err, req, res, next) => {
  if (!err.statusCode) err.statusCode = 500;

  res.status(err.statusCode).json({
    type: 'error', msg: err.message
  });
});

module.exports = app;