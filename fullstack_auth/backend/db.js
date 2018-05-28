const { Pool } = require('pg');
const db_config = require('./secrets/db_configuration');

const pool = new Pool(db_config);
module.exports = pool;