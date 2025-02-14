const fs = require("fs");
const path = require("path"); 

function allCopyFile() {
  const thisFile = path.join(__dirname, "files");
  if (
    !fs.existsSync(thisFile) ||
    fs.existsSync(path.join(__dirname, "files_copy"))
  ) {
    throw new Error(" FS operation failed ");
  } else {
   fs.mkdir(path.join(__dirname, "files_copy"), (err)=>{
      if (err){
         console.log(err);
      }
   })
   fs.readdir(thisFile, (err, data)=>{
      if (err){
         console.log(err);
      }else{
         data.forEach(file => {
            fs.copyFile(path.join(thisFile, file), path.join(__dirname, "files_copy", file), (err) =>{
              if (err){
                 console.log(err);
              }
            })
         });
      }
   })
}
}
allCopyFile();
