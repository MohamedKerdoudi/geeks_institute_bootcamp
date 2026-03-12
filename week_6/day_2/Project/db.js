
const { Pool } = require('pg');

const pool = new Pool({
  user: 'your_pg_username',
  host: 'localhost',
  database: 'restaurant_db',
  password: 'your_pg_password',
  port: 5432
});

module.exports = pool;