const http = require("http");
const dotenv = require("dotenv");
dotenv.config();
const path = require("path");
const fs = require('fs')

const PORT = process.env.PORT || 3030
const HOST = process.env.HOST || "127.0.0.1"

const viewsPage = (page) => 
  path.resolve(__dirname, "views", `${page}.html`);


const server = http.createServer((req, res) => {
   let filePath = ""
  
   switch (req.url) {
     case "/":
       filePath = viewsPage("index");
       break;
     case "/Adabiyotlar":
       filePath = viewsPage("Adabiyotlar");
       break;
     case "/Maqolalar":
       filePath = viewsPage("Maqolalar");
       break;
     case "/Dissertatsiyalar":
       filePath = viewsPage("Dissertatsiyalar");
       break;
     case "/Monografiyalar":
       filePath = viewsPage("Monografiyalar");
       break;
     case "/Muassasalar":
       filePath = viewsPage("Muassasalar");
       break;
     case "/Mualliflar":
       filePath = viewsPage("Mualliflar");
       break;
     case "/Jurnallar":
       filePath = viewsPage("Jurnallar");
       break;

     default:
      filePath = viewsPage("error")
      res.statusCode =404
       break;
   }

   res.setHeader("Content-Type", "text/html")

   if (req.url !== ""){
      fs.readFile(filePath, (err, page)=> {
         if (err){
            res.statusCode = 500
            res.end("Serverda xatolik - 500")
         }else{
          res.end(page)
        }
      })
   }
});

server.listen(PORT, HOST, (error)=>{
   if (error){
      console.log(error);
   }else{
      console.log(`Server ${PORT} - portda ishga tushdi uyga vazifa ${HOST}`);
   }
})