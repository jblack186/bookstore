const Pool = require("pg").Pool;

const pool = new Pool({
  host: "localhost",
  user: "postgres",
  password: "Maddog90",
  port: 5432,
  database: "bookstore"
});

module.exports = pool;