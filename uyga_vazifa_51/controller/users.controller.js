const pool = require("../config/db");
const { errorHandler } = require("../helpers/error_handler");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const jwtService = require("../services/jwt.service");
const config = require("config")

const addNewUser = async (req, res) => {
  try {
    const {
      first_name,
      last_name,
      email,
      password,
      role,
      is_active,
      created_at,
      interests,
      bookmarks,
      phone_number,
    } = req.body;
    const hashedPassword = bcrypt.hashSync(password, 7);
    const newUser = await pool.query(
      `
            INSERT INTO users(first_name, last_name, email, password, role, is_active, created_at, interests, bookmarks, phone_number)
            VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING *
            `,
      [
        first_name,
        last_name,
        email,
        hashedPassword,
        role,
        is_active,
        created_at,
        interests,
        bookmarks,
        phone_number,
      ]
    );
    console.log(newUser.rows[0]);
    res
      .status(201)
      .send({ message: "Yangi user qo'shildi", user: newUser.rows[0] });
  } catch (error) {
    errorHandler(error, res);
  }
};


const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const userData = await pool.query(
      `
      SELECT * FROM users WHERE email = $1      
      `,
      [email]
    );
    if (userData.rowCount == 0) {
      return res.status(400).send({ message: "Email yoki password nogo'g'ri" });
    }
    // console.log(1);
    const user = userData.rows[0];
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return res.status(400).send({ message: "Email yoki password nogo'g'ri" });
    }
    console.log(user);

    const payload = {
      id: user.id,
      email: user.email,
      role: user.role,
    };

    const tokens = jwtService.generateTokens(payload);
    await pool.query(
      `
       UPDATE users SET refresh_token=$1 WHERE id = $2     
      `,
      [tokens.refreshToken, user.id]
    );
    console.log(tokens);
    res.cookie("refreshToken", tokens.refreshToken, {
      httpOnly: true,
      secure: true, // HTTPS uchun
      sameSite: "Strict",
      maxAge: config.get("refresh_cookie_time"),
    });
    console.log(1);
    res.status(200).send({message: "Access va Refresh tokenlar saqlandi", accessToken: tokens.accessToken})
  } catch (error) {
    errorHandler(error, res)
  }
};


const logoutUser = async(req, res)=>{
  try{
    const {refreshToken} = req.cookies
    if (!refreshToken){
      return res.status(400).send({message: "Cookie refresh token topilmadi"})
    }
    const userData = await pool.query(
      `
      SELECT * FROM users WHERE refresh_token = $1
      `,[refreshToken]
    )
    if(!userData.rowCount){
      return res.status(400).send({message: "Bunday tokenli foydalanuvchi topilmadi"})
    }
    await pool.query(
      `
      UPDATE users SET refresh_token=$1 WHERE refresh_token = $2
      `,["",refreshToken]
    )
    res.clearCookie("refreshToken");
    res.send({message: "User logged out", user: userData.rows[0]})
  }catch(error){
    errorHandler(error, res)
  }
}

const refreshTokenUser = async (req, res) => {
  try {
      const {refreshToken} = req.cookies;
      if (!refreshToken) {
          return res
              .status(400)
              .send({messege: "Cookieda refresh token topilmadi!"});
      }
      // const decodedRefreshToken = await jwtService.verifyRefreshToken(refreshToken);
      const userData = await pool.query(
        `
        SELECT * FROM users WHERE refresh_token = $1
        `,[refreshToken]
      )
      if (!userData.rowCount) {
          return res
              .status(400)
              .send({messege: "Bunday tokenli foydalanuvchi topilmadi!"});
      }
      const user = userData.rows[0]
      const payload = {
          id: user.id,
          email: user.email,
          role: user.role
      }
      const tokens = jwtService.generateTokens(payload)
      await pool.query(
        `
        UPDATE users SET refresh_token=$1 WHERE refresh_token = $2
        `,["",tokens.refreshToken]
      )

      res.cookie("refreshToken", tokens.refreshToken, {
          httpOnly: true,
          maxAge: config.get("refresh_cookie_time")
      });
      res.send({
          messege: "Tokenlar yangilandi!", 
          accessToken: tokens.accessToken
      });
  } catch (error) {
      errorHandler(error, res);
  }
}


const getAllUsers = async (req, res) => {
  try {
    const newUser = await pool.query(
      `
        SELECT * FROM users
    `
    );
    res.status(200).send({ message: "Barcha user", user: newUser.rows });
  } catch (error) {
    console.log(error);
  }
};

const getUserById = async (req, res) => {
  try {
    const id = req.params.id;
    const newUser = await pool.query(
      `
            SELECT * FROM users WHERE id=($1)
            `,
      [id]
    );
    res
    .status(200)
    .send({ message: `${id} id li language`, language: newUser.rows[0] });
  } catch (error) {
    console.log(error);
  }
};

const deleteUserById = async (req, res) => {
  try {
    const id = req.params.id;
    const newUser = await pool.query(
      `
            DELETE FROM users WHERE id = ($1)
            `,
      [id]
    );
    res.status(200).send({
      message: `${id} id li user o'chirildi`,
      language: newUser.rows[0],
    });
  } catch (error) {
    console.log(error);
  }
};


module.exports = {
  addNewUser,
  getAllUsers,
  getUserById,
  deleteUserById,
  loginUser,
  logoutUser,
  refreshTokenUser,
};
