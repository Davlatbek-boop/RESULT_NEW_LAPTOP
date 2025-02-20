const { default: axios } = require("axios");
const { createViewPage } = require("../helpers/create-view_page");



const getPosts = async (req, res) => {
  try {
    const userPosts = await axios(`https://jsonplaceholder.typicode.com/posts`);
    const posts = await userPosts.data;
    res.render(createViewPage("posts"), { title: "Posts page", posts });
  } catch (error) {
    res.send("Internal server error");
    console.log(error);
  }
};

const getPostById = async (req, res) => {
  try {
    const id = req.params.id;
    const userPosts = await axios(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
    const post = await userPosts.data;
    console.log(post);

    res.render(createViewPage("post"), { title: "Posts page", post });
  } catch (error) {
    res.send("Internal server error");
    console.log(error);
  }
};

const getAddPost = (req, res) => {
  try {
    res.render(createViewPage("add-post"), { title: "Posts page" });
  } catch (error) {
    res.send("Internal server error");
    console.log(error);
  }
};

const postAddPost = async (req, res) => {
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
};

module.exports = {
   getPosts,
   getPostById,
   getAddPost,
   postAddPost,
}