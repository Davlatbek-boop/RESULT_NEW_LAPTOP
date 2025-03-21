const { errorHandler } = require("../helpers/errorHandler");
const { adminValidation } = require("../validations/admin.validation");
const Admin = require("../schemas/Admin");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const config = require("config");
const uuid = require("uuid");
const mailService = require("../services/mail.service");

const addAdmin = async (req, res) => {
  try {
    const { error, value } = adminValidation(req.body);
    if (error) {
      return errorHandler(error, res);
    }
    const {
      full_name,
      user_name,
      password,
      phone_number,
      email,
      tg_link,
      is_creator,
      is_active,
      description,
    } = value;
    const hashPass = bcrypt.hashSync(password, 7);

    const payload = {
      email: email,
      number: phone_number,
    };
    const token = jwt.sign(payload, config.get("tokenKey"), {
      expiresIn: config.get("tokenTime"),
    });

    const activation_link = uuid.v4();

    console.log(token);

    const newAdmin = await Admin.create({
      full_name,
      user_name,
      hashed_password: hashPass,
      phone_number,
      email,
      tg_link,
      hashed_token: token,
      is_creator,
      is_active,
      description,
    });

    await mailService.sendActivationMail(
      newAdmin.email,
      `${config.get("api_url")}/api/admin/activate/${activation_link}`
    );

    res
      .status(201)
      .send({
        message:
          "Yangi admin qo'shildi.Akkauntni faollashtirish uchun pochtaga o'ting",
        newAdmin, token,
      });

  } catch (error) {
    errorHandler(error, res);
  }
};

const loginAdmin = async (req, res) => {
  try {
    const { email, password } = req.body; // identification jarayoni
    const admin = await Admin.findOne({ email });
    if (!admin) {
      return res.status(400).send({ message: "Email yoki password nogo'g'ri" });
    }
    const validPassword = bcrypt.compareSync(password, admin.hashed_password); // autentifikatsiya jarayoni
    if (!validPassword) {
      return res.status(400).send({ message: "Email yoki password nogo'g'ri" });
    }

    const payload = {
      email: admin.email,
      number: admin.phone_number,
    };
    const token = jwt.sign(payload, config.get("tokenKey"), {
      expiresIn: config.get("tokenTime"),
    });

    await Admin.updateOne(
      { _id: admin._id }, // Qaysi adminni yangilash kerakligini ko‘rsatamiz
      { $set: { hashed_token: token } } // Yangi qiymatni belgilaymiz
    );

    res.send({ message: "Tizimga xush kelibsiz", token });
  } catch (error) {
    errorHandler(error, res);
  }
};

const getAllAdmin = async (req, res) => {
  try {
    const AllAdmin = await Admin.find({});
    res.status(200).send({ message: "Barcha Adminlar", AllAdmin });
  } catch (error) {
    errorHandler(error, res);
  }
};

const getAdminById = async (req, res) => {
  try {
    const id = req.params.id;
    const AdminById = await Admin.find({ _id: id });
    res.status(200).send({ message: "Admin", AdminById });
  } catch (error) {
    errorHandler(error, res);
  }
};

const deleteAdminById = async (req, res) => {
  try {
    const id = req.params.id;
    await Admin.deleteOne({ _id: id });
    res.status(200).send({ message: `${id} li Admin o'chirildi` });
  } catch (error) {
    errorHandler(error, res);
  }
};


const activateAdmin = async (req, res) => {
  try {
    const admin = await Admin.findOne({ tg_link: req.params.link });
    if (!admin) {
      return res.status(404).send({ message: "Foydalanuvchi topilmadi" });
    }

    admin.is_active = true;
    await admin.save();
    res.send({
      message: "Foydalanuvchi faollashtirildi",
      status: admin.is_active,
    });
  } catch (error) {
    errorHandler(error, res);
  }
};


module.exports = {
  addAdmin,
  getAllAdmin,
  getAdminById,
  deleteAdminById,
  loginAdmin,
  activateAdmin,
};
