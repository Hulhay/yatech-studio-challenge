const bcrypt = require("bcrypt");
const { db } = require("../../config");
const { getUserByEmailQuery } = require("../query");
const { emailFormat, msg, buildResponse } = require("../../utils");

const registerValidation = (req) => {
  const { name, email, password } = req;

  if (!name) {
    return msg.errEmptyName;
  }

  if (!email) {
    return msg.errEmptyEmail;
  }

  if (!emailFormat.test(email)) {
    return msg.errEmailFormat;
  }

  if (!password) {
    return msg.errEmptyPassword;
  }

  if (password.length < 8) {
    return msg.errShortPassword;
  }

  return "";
};

const loginValidation = (req) => {
  const { email, password } = req;

  if (!email) {
    return msg.errEmptyEmail;
  }

  if (!emailFormat.test(email)) {
    return msg.errEmailFormat;
  }

  if (!password) {
    return msg.errEmptyPassword;
  }

  return "";
};

const validateEmailRegister = async (email) => {
  const result = await db.query(getUserByEmailQuery(email));
  if (result[0].length > 0) {
    return msg.errEmailExist;
  }

  return "";
};

const validateRequestLogin = async (req) => {
  const { email, password } = req;

  const result = await db.query(getUserByEmailQuery(email));
  if (result[0].length === 0) {
    return {
      user: null,
      err: msg.errEmailNotFound,
    };
  }

  const validPassword = await bcrypt.compare(password, result[0][0].password);
  if (!validPassword) {
    return {
      user: null,
      err: msg.errWrongPassword,
    };
  }

  return {
    user: result[0][0],
    err: "",
  };
};

const validateRefreshToken = (req) => {
  const { refresh_token } = req;

  if (!refresh_token) {
    return msg.errEmptyToken;
  }

  return "";
};

module.exports = {
  registerValidation,
  loginValidation,
  validateEmailRegister,
  validateRequestLogin,
  validateRefreshToken,
};
