const mysql2 = require("mysql2");

const connection = mysql2.createConnection({
  host: process.env.HOST,
  user: process.env.MYSQL_USERNAME,
  password: process.env.PASSWORD,
  database: process.env.DB,
  port: process.env.MYSQL_PORT,
});

module.exports = connection;
