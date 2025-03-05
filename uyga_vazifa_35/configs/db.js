const mysql = require("mysql2");

const connection = mysql.createConnection({
  port: process.env.SQL_PORT,
  host: process.env.HOST,
  database: process.env.SQL_DB,
  password: process.env.SQL_PASSWORD,
  user: process.env.SQL_USERNAME,
});

module.exports = connection
