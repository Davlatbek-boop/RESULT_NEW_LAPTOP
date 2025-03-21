const { errorHandler } = require("../../helpers/error_handler");


module.exports = function (req, res, next) {
  try {

    const id = req.params.id;
    if (id != req.user.id) {
      return res
        .status(403)
        .send({
          message: "Faqat shaxsiy ma'lumotlarni ko'rishga ruxsat etiladi",
        });
    }

    //   if (decodedToken.role != "admin") {
    //     return res.status(403).send({ message: "Ruxsat berilmagan foydalanuvchi" });
    //   }
    next();
  } catch (error) {
    errorHandler(error, res);
  }
};
