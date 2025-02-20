const { default: axios } = require("axios");
const { createViewPage } = require("../helpers/create-view_page");


const getJobs = async (req, res) => {
  try {
    const userJobs = await axios(`https://jsonplaceholder.typicode.com/jobs`);
    const jobs = await userJobs.data;
    res.render(createViewPage("jobs"), { title: "Jobs page", jobs });
  } catch (error) {
    res.send("Internal server error");
    console.log(error);
  }
};

module.exports = {
   getJobs,
}