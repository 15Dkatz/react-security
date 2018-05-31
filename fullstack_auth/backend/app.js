const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const user = require('./user');

const app = express();

app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors({
  origin: 'http://localhost:1234',
  credentials: true
}));
app.use('/user', user);

app.use((err, req, res, next) => {
  if (!err.statusCode) err.statusCode = 500;

  res.status(err.statusCode).json({
    type: 'error', msg: err.message
  });
});

module.exports = app;