const fs = require("fs")
const path = require("path")

function createFile (){
   const thisFile = path.join(__dirname, "files")
   const fileName = path.join(thisFile, "fresh.txt")
   if (fs.existsSync(path.join(thisFile, "fresh.txt"))){
      throw new Error(" FS operation failed ");
   }else{   
      fs.mkdir(thisFile, (err)=>{
         if (err){
            console.log("files nomli papka yaratilmadi menimcha mavjud");
         }
      })
      fs.writeFile(fileName, "I am fresh and young", (err) => {
        if (err) {
          console.log(err);
        }else{
         console.log("fresh.txt file muvaffaqiyatli yaratildi");
        }
      });
   }
}
createFile()