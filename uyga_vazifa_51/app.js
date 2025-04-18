const express = require('express');
const config = require('config');
const mainRouter = require("./routes/index.routes")
const createTables = require('./config/create-table')
const cookieParser = require("cookie-parser"); //cookie malumotlarini obyect ko'rinishida chaqirib beradi

const PORT = config.get("port") || 3030

const app = express()
app.use(cookieParser());

app.use(express.json())
app.use("/api", mainRouter)

app.get("/create-tables", async (req, res) =>{
    await createTables();
    console.log("Tables were created");
    res.status(200).send("created")
})

async function start() {
    try {
        app.listen(PORT, ()=>{
            console.log(`Server started at: http://localhost:${PORT}`);
        })
    } catch (error) {
        console.log(error);
    }
}

start()