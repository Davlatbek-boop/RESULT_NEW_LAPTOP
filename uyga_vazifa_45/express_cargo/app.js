const express = require("express");
const mongoose = require("mongoose");
const config = require("config");
const mainRouter = require("./routes/index.routes");
const errorHandling = require("./middleware/errors/error.handling");

const requestError = require("./middleware/loggers/request.error.logger")
const responses = require("./middleware/loggers/request.logger")


const PORT = config.get("port") || 3030;

const app = express();

app.use(express.json());
app.use(responses)

app.use("/api", mainRouter)


app.use(requestError)

app.use(errorHandling)

async function start() {
  try {
    await mongoose.connect(config.get("dbUri"));
    app.listen(PORT, () => {
      console.log(`Server started at: http://localhost:${PORT}`);
    });
  } catch (error) {
    console.log(error);
    console.log("Ma'lumotlar bazasiga ulanishda xatolik");
  }
}

start();
