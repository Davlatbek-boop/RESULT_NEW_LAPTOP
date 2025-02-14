const fs = require("fs");
const path = require("path");

function deletefiles() {
  const thisFile = path.join(__dirname, "fileToRemove.txt");
  if (!fs.existsSync(thisFile)) {
    fs.writeFile(thisFile, "", (err) => {
      if (err) {
        console.log(err);
      }
    });
    throw new Error(" FS operation failed ");
  } else {
    fs.unlink(thisFile, (err) => {
      if (err) {
        console.log(err);
      }
    });
  }
}
deletefiles();
