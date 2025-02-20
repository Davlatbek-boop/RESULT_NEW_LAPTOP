const { default: axios } = require("axios");
const { createViewPage } = require("../helpers/create-view_page");

const getComments = async (req, res) => {
  try {
    const commentsData = await axios(`https://jsonplaceholder.typicode.com/comments`);
    const comments = await commentsData.data;
    res.render(createViewPage("comments"), { title: "Comments page", comments });
  } catch (error) {
    res.send("Internal server error");
    console.log(error);
  }
};

const getCommentById = async (req, res) => {
  try {
    const id = req.params.id;
    const { data } = await axios(
      `https://jsonplaceholder.typicode.com/comments/${id}`
    );
    // const users = await userData.data;
    res.render(createViewPage("comment"), { title: "Comments page", comment: data });
  } catch (error) {
    res.send("Internal server error");
    console.log(error);
  }
};

const getAddComment = (req, res) => {
  try {
    res.render(createViewPage("add-comment"), { title: "Comments page" });
  } catch (error) {
    res.send("Internal server error");
    console.log(error);
  }
};

//req.params - url link malumotlarini; req.body formdagilarni; req.query urlni ? bilan yuborilganlarni qabul qilish
const postAddComment = async (req, res) => {
  try {
    const { name, email, body } = req.body;
    const commentData = await axios.post(
      `https://jsonplaceholder.typicode.com/comments`,
      {
        name,
        email,
        body,
      }
    );
    const comment = commentData.data;
    res.render(createViewPage("comment"), { title: "Comments page", comment });
  } catch (error) {
    res.send("Internal server error");
    console.log(error);
  }
};

const deleteCommentById = async (req, res) => {
  try {
    const id = req.params.id;
    const commentData = await axios.delete(
      `https://jsonplaceholder.typicode.com/comments/${id}`
    );
    const comment = commentData.data;
   //  console.log(comment);
    res.sendStatus(204);
  } catch (error) {
    res.send("Internal server error");
    console.log(error);
  }
};

const getEditCommentById = async (req, res) => {
  try {
    // const id = req.params.id
    const { id } = req.params;
    const commentData = await axios({
      method: "GET",
      url: `https://jsonplaceholder.typicode.com/comments/${id}`,
    });
    const comment = commentData.data;
    res.render(createViewPage("edit-comment"), {
      title: "Comments page",
      comment,
    });
  } catch (error) {
    res.send("Internal server error");
    console.log(error);
  }
};

const putEditCommentById = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email, body } = req.body;
    const commentData = await axios.patch(
      `https://jsonplaceholder.typicode.com/comments/${id}`,
      {
        name,
        email,
        body,
      }
    );
    const comment = commentData.data;
    res.render(createViewPage("comment"), { title: "Comments page", comment });
  } catch (error) {
    res.send("Internal server error");
    console.log(error);
  }
};

module.exports = {
  getComments,
  getCommentById,
  getAddComment,
  postAddComment,
  deleteCommentById,
  getEditCommentById,
  putEditCommentById,
};
