const dotenv = require("dotenv");
const express = require("express");
const { create } = require("node:domain");
const path = require("node:path");
const morgan = require("morgan");
const axios = require("axios");
const { title } = require("node:process");

dotenv.config();
const PORT = process.env.PORT || 3030;

const createViewPage = (page) => path.join(__dirname, "views", `${page}.ejs`);

const app = express();

app.use(express.urlencoded({ extended: false }));

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
app.get("/users", async (req, res) => {
  try {
    const userData = await axios(`https://jsonplaceholder.typicode.com/users`);
    const users = await userData.data;
    res.render(createViewPage("users"), { title: "Users page", users });
  } catch (error) {
    res.send("Internal server error");
    console.log(error);
  }
});

app.get("/user/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const { data } = await axios(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
    // const users = await userData.data;
    res.render(createViewPage("user"), { title: "Users page", user: data });
  } catch (error) {
    res.send("Internal server error");
    console.log(error);
  }
});

app.get("/add-user", (req, res) => {
  try {
    res.render(createViewPage("add-user"), { title: "Users page" });
  } catch (error) {
    res.send("Internal server error");
    console.log(error);
  }
});

//req.params - url link malumotlarini; req.body formdagilarni; req.query url
app.post("/add-user", async (req, res) => {
  try {
    const { username, email, phone } = req.body;
    const userData = await axios.post(
      `https://jsonplaceholder.typicode.com/users`,
      {
        username,
        email,
        phone,
      }
    );
    const user = userData.data
    res.render(createViewPage("user"), { title: "Users page", user });
  } catch (error) {
    res.send("Internal server error");
    console.log(error);
  }
});
app.delete("/user/:id", async (req, res)=>{
  try {
    const id = req.params.id
    const userData = await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
    const user = userData.data    
    res.sendStatus(204)
  } catch (error) {
    res.send("Internal server error");
    console.log(error);
  }
})
//_----------------------------------------End-Users

//----------------------------------------Posts
app.get("/posts", async (req, res) => {
  try {
    const userPosts = await axios(`https://jsonplaceholder.typicode.com/posts`);
    const posts = await userPosts.data;
    res.render(createViewPage("posts"), { title: "Posts page", posts });
  } catch (error) {
    res.send("Internal server error");
    console.log(error);
  }
});

app.get("/post/:id", async (req, res) => {
  try {
    const id = req.params.id
    const userPosts = await axios(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const post = await userPosts.data;
    console.log(post);
    
    res.render(createViewPage("post"), { title: "Posts page", post });
  } catch (error) {
    res.send("Internal server error");
    console.log(error);
  }
});

app.get("/add-post", (req, res) => {
  try {
    res.render(createViewPage("add-post"), { title: "Posts page" });
  } catch (error) {
    res.send("Internal server error");
    console.log(error);
  }
});

app.post("/add-post", async (req, res) => {
  try {
    const { userId, id, title, body } = req.body;
    const postData = await axios.post(
      `https://jsonplaceholder.typicode.com/posts`,
      {
        userId,
        id,
        title,
        body,
      }
    );
    const post = postData.data;
    res.render(createViewPage("post"), { title: "Posts page", post });
  } catch (error) {
    res.send("Internal server error");
    console.log(error);
  }
});








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
