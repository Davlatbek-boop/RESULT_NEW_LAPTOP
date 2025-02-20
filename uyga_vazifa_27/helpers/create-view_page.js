const path = require("node:path")

const createViewPage = (page) => path.join(__dirname, "../views", `${page}.ejs`);

module.exports = {
  createViewPage,
};