const dotenv = require("dotenv");
const express = require("express");
const morgan = require("morgan");

const usersRoute = require("./routes/users.routes")
const postsRoute = require("./routes/posts.routes")
const commentsRoute = require("./routes/comments.routes")

const methodOverride = require("method-override");
const { createViewPage } = require("./helpers/create-view_page");

dotenv.config();
const PORT = process.env.PORT || 3030;


const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(methodOverride("_method"));

// serve static
app.use(express.static("styles"));
app.use(express.static("images"));

app.set("view engine", "ejs"); // ko'rish uchun ejs dan foydalan
// app.use(morgan("tiny"));
// app.use(morgan("combined"))
// app.use(morgan("short"))
// app.use(morgan("dev"));
app.use(morgan("common"));

app.get("/", (req, res) => {
  res.render(createViewPage("index"), { title: "Main page" });
});

//---------------------------------------Users
app.use(usersRoute)
//_----------------------------------------End-Users

//----------------------------------------posts
app.use(postsRoute)
//----------------------------------------End-Users

// ---------------------------------------Comments
app.use(commentsRoute)
//-----------------------------------------End-Comments

app.get("/jobs", (req, res) => {
  res.render(createViewPage("jobs"), { title: "Jobs page" });
});

app.get("/gallery", (req, res) => {
  res.render(createViewPage("gallery"), { title: "Gallery page" });
});

app.get("/contacts", (req, res) => {
  res.render(createViewPage("contacts"), { title: "Contacts page" });
});

app.use((req, res) => {
  res.render(createViewPage("404"), { title: "Error page" });
});

app.listen(PORT, () => {
  console.log(`Server ${PORT}- portda ishga tushdi`);
});
