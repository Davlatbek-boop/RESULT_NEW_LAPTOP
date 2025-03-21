const winston = require("winston");
const expressWinston = require("express-winston");
const config = require("config")
require("winston-mongodb");


const resError = expressWinston.errorLogger({
  transports: [
    new winston.transports.Console(),
    new winston.transports.MongoDB({
                  db:config.get("dbUri"),
                  // options: {useUnifiesTopology: true},
              }),
    new winston.transports.File({
      filename: "log/requestError.log",
      level: "error",
    }),
  ],
  format: winston.format.combine(winston.format.json()),
});

module.exports = resError;
