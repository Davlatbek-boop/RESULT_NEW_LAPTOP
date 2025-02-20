const { default: axios } = require("axios");
const { createViewPage } = require("../helpers/create-view_page");



const getUsers = async (req, res) => {
  try {
    const userData = await axios(`https://jsonplaceholder.typicode.com/users`);
    const users = await userData.data;
    res.render(createViewPage("users"), { title: "Users page", users });
  } catch (error) {
    res.send("Internal server error");
    console.log(error);
  }
};

const getUserById = async (req, res) => {
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
};

const getAddUser = (req, res) => {
  try {
    res.render(createViewPage("add-user"), { title: "Users page" });
  } catch (error) {
    res.send("Internal server error");
    console.log(error);
  }
};

//req.params - url link malumotlarini; req.body formdagilarni; req.query urlni ? bilan yuborilganlarni qabul qilish
const postAddUser = async (req, res) => {
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
    const user = userData.data;
    res.render(createViewPage("user"), { title: "Users page", user });
  } catch (error) {
    res.send("Internal server error");
    console.log(error);
  }
};

const deleteUserById = async (req, res) => {
  try {
    const id = req.params.id;
    const userData = await axios.delete(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
    const user = userData.data;
    console.log(user);
    res.sendStatus(204);
  } catch (error) {
    res.send("Internal server error");
    console.log(error);
  }
};

const getEditUserById = async (req, res) => {
  try {
    // const id = req.params.id
    const { id } = req.params;
    const userData = await axios({
      method: "GET",
      url: `https://jsonplaceholder.typicode.com/users/${id}`,
    });
    const user = userData.data;
    res.render(createViewPage("edit-user"), {
      title: "Users page",
      user,
    });
  } catch (error) {
    res.send("Internal server error");
    console.log(error);
  }
};

const putEditById = async (req, res) => {
  try {
    const { id } = req.params;
    const { username, name, email, phone } = req.body;
    const userData = await axios.put(
      `https://jsonplaceholder.typicode.com/users/${id}`,
      {
        username,
        name,
        email,
        phone,
      }
    );
    const user = userData.data;
    res.render(createViewPage("user"), { title: "Users page", user });
  } catch (error) {
    res.send("Internal server error");
    console.log(error);
  }
};

module.exports = {
  getUsers,
  getUserById,
  getAddUser,
  postAddUser,
  deleteUserById,
  getEditUserById,
  putEditById,
};