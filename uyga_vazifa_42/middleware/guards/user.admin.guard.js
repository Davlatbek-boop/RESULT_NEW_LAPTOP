const { errorHandler } = require("../../helpers/error_handler");

module.exports = function (req, res, next) {
  try {
    if (req.user.role != "admin") {
      return res
        .status(403)
        .send({ message: "Ruxsat berilmagan foydalanuvchi" });
    }
    next();
  } catch (error) {
    errorHandler(error, res);
  }
};
