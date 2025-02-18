const express = require("express")
const dotenv = require("dotenv")
dotenv.config()
const path = require("path")


const createPathview = (page)=> path.join(__dirname, "views" , `${page}.ejs`)

const PORT = process.env.PORT || 3030

const app = express()

app.get("/", (req, res) => {
  res.render(createPathview("home"), {title: "Home Page"});
});

app.get("/adabiyotlar", (req, res)=>{
   res.render(createPathview("adabiyotlar"), {title: "Adabiyotlar Page"})
})

app.get("/maqolalar", (req, res) => {
   res.render(createPathview("maqolalar"), { title: "Maqolalar Page" });
});

app.get("/dissertatsiya", (req, res) => {
res.render(createPathview("dissertatsiya"), { title: "Dissertatsiya Page" });
});

app.get("/monografiya", (req, res) => {
  res.render(createPathview("monografiya"), { title: "Monografiya Page" });
});

app.get("/muassasalar", (req, res) => {
   res.render(createPathview("muassasalar"), { title: "Muassasalar Page" });
});

app.get("/mualliflar", (req, res) => {
   res.render(createPathview("mualliflar"), { title: "Mualliflar Page" });
});

app.get("/jurnallar", (req, res) => {
  res.render(createPathview("jurnallar"), { title: "Jurnallar Page" });
});

app.use((req, res) => {
   res.render(createPathview("404"), { title: "Error Page" });
});



app.listen(PORT, ()=>{
   console.log(`Server ${PORT}-portda ishga tushdi`);
})