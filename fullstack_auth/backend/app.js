const express = require('express');
const bodyParser = require('body-parser');
const user = require('./user');

const app = express();

app.use(bodyParser.json());
app.use('/user', user);

app.use((err, req, res, next) => {
  if (!err.statusCode) err.statusCode = 500;

  res.status(err.statusCode).json({
    type: 'error', msg: err.message
  });
});

module.exports = app;