
module.exports = function (req, res, next) {
  if (req.user.role != "admin") {
    return res.status(403).send({ message: "Ruxsat berilmagan foydalanuvchi" });
  }
  next();
};
