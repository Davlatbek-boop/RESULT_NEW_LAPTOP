const fs = require("fs");
const path = require("path");

function renameFiles() {
   const thisFile = path.join(__dirname, "wrongFilename.txt");
   if (!fs.existsSync(thisFile) && fs.existsSync(path.join(__dirname, "properFilename.md"))) {
     fs.writeFile(thisFile, "", (err) => {
       if (err) {
         console.log(err);
       }});
    throw new Error(" FS operation failed ");
  } else {
   fs.rename(thisFile, path.join(__dirname, "properFilename.md"), (err)=>{
      if (err){
         console.log(err);
      }
   })
  }
}
renameFiles();
