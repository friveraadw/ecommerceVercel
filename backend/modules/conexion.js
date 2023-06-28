const { Pool } = require('pg');
const { db_user, db_password, db_name } = require('../config');

const pool = new Pool({
  connectionString: process.env.POSTGRES_URL + "?sslmode=require",
})

module.exports = pool;
