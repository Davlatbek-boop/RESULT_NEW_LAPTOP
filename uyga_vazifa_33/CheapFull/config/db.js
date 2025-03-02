// const mysql2 = require("mysql2");

// const connection = mysql2.createConnection({
//   host: process.env.HOST,
//   port: process.env.DB_PORT,
//   user: process.env.DB_USERNAME,
//   password: process.env.DB_PASSWORD,
//   database: process.env.DB,
// });


// module.exports = connection   

const mysql2 = require("mysql2");

const connection = mysql2.createConnection({
  host: process.env.HOST,
  user: process.env.MYSQL_USERNAME,
  password: process.env.PASSWORD,
  database: process.env.DB,
  port: process.env.MYSQL_PORT,
});

module.exports = connection;
