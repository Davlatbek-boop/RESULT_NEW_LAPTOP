module.exports = function (req, res, next) {
  const id = req.params.id;
  if (id != req.user.id) {
    return res.status(403).send({
      message: "Ruxsat faqat shaxsiy malumotlar uchun",
    });
  }

  next();
};
