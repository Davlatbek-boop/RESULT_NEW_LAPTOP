//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>masala - 1

// const urlData = {
//   protocol: "https",
//   hostname: "mywebsite.com",
//   path: "/blog/article",
//   query: {
//     id: 45,
//     author: "Ali",
//     lang: "en",
//   },
// };
// let url = new URL(`${urlData.protocol}://${urlData.hostname}${urlData.path}`);
// url.search = new URLSearchParams(urlData.query)
// console.log(url.href);

// url.searchParams.set("lang", "uz")
// console.log(url.href)

// url.searchParams.append("view", "mobile")
// console.log(url.href);

// console.log(String(url));


//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>masala - 2

// const os = require("os")

// console.log(os.cpus());
// console.log("Yadrolar soni:",os.cpus().length);


// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> masala - 3

// const path = require('path')

// let root = "/home/user/"
// let subFolder = "projects/myapp/";
// let file = "server.js"
// const fileYoli = path.join(root, subFolder, file)
// console.log(fileYoli);


//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> masala - 4

// const path = require("path")

// const paths = [
//   "C://Users//Admin//Desktop//project//..//index.js",
//   "/home/user/docs/../images/photo.png",
//   "./folder/subfolder/../../script.js",
// ];

// paths.forEach(file => {
//    console.log(path.normalize(file));
// });


//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>masala - 5

// const path = require("path")

// const files = [
//   "report.docx",
//   "notes.txt",
//   "data.json",
//   "README.md",
//   "script.js",
//   "todo.txt",
// ];

// let sort = []
// files.forEach(file => {
//    if (path.extname(file)==".txt" || path.extname(file)==".md"){
//       sort.push(file);
//    }
// });

// console.log(sort);


