const express = require('express')
require("dotenv").config()

const indexRouted = require("./routes/index.routes")

const PORT = process.env.PORT || 3030

const app = express()

app.use(express.json())

app.use("/api", indexRouted)

app.listen(PORT, ()=>{
   console.log("Server is listened ",PORT);
})