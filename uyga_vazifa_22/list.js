const fs = require("fs");
const path = require("path");

function deletefiles() {
  const thisFile = path.join(__dirname, "files");
  if (!fs.existsSync(thisFile)) {
    fs.mkdir(thisFile, (err) => {
      if (err) {
        console.log(err);
      }
    });
    throw new Error(" FS operation failed ");
  } else {
   fs.readdir(thisFile, (err, files)=>{
      if (err){
         console.log(err);
      }else{
         console.log(files);
      }
   })
  }
}
deletefiles();
