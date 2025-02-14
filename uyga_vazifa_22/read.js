const fs = require("fs");
const path = require("path");

function readFiles() {
  const thisFile = path.join(__dirname, "fileToRead.txt");
  if (!fs.existsSync(thisFile)) {
    fs.writeFile(thisFile, "Bu file o'qish uchun yangi yaratildi.", (err) => {
      if (err) {
        console.log(err);
      }
    });
    console.log(" FS operation failed ");
  } else {
    fs.readFile(thisFile, "utf-8", (err, data) => {
      if (err) {
        console.log(err);
      } else {
        console.log(data);
      }
    });
  }
}
readFiles();
