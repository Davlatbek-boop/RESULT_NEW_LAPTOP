const fs = require("fs");
const path = require("path");

function writeNumbers() {
 
     fs.writeFile(path.join(__dirname, "sonlar.txt"), "", (err) => {
       if (err) {
         console.log(err);
       }
     });
    for (let i = 1; i <= 100; i++) {
      const numberRand = Math.floor(Math.random() * 100);
      fs.appendFile(
        path.join(__dirname, "sonlar.txt"),
        String(numberRand) + "\n",
        (err) => {
          if (err) {
            console.log(err);
          }
        }
      );
    }
  
}
writeNumbers();


function readNumbers(){
   let arr = []
   if (!fs.existsSync(path.join(__dirname, "sonlar.txt"))){
      console.log("Bunday sonlar.txt file mavjud emas");
   }else{
      fs.readFile(path.join(__dirname, "sonlar.txt"), "utf-8", (err, sonlar)=>{
         if (err){
            console.log(err);
         }else{
            arr = sonlar.split("\n")
         }
         console.log(arr);
      })
   }
}
readNumbers()