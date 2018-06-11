const path = require('path');
const express = require('express');
const app = express();
const port = process.env.PORT || 1234;

app.use('/', express.static(path.join(__dirname, 'dist')));

app.listen(port, () => console.log(`listening on ${port}`));