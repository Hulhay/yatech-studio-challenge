const { db } = require("../config");
const bcrypt = require("bcrypt");
const { buildResponse, msg, generateTokens } = require("../utils");
const { insertNewUser } = require("./query");
const {
  registerValidation,
  loginValidation,
  validateEmailRegister,
  validateRequestLogin,
} = require("./validation");

const register = async (req, res) => {
  const err = registerValidation(req.body);
  if (err) {
    return buildResponse(res, 422, err, null);
  }

  const { name, email, password } = req.body;

  const encryptedPassword = await bcrypt.hash(password, 10);

  try {
    const err = await validateEmailRegister(email);
    if (err) {
      return buildResponse(res, 422, err, null);
    }

    await db.query(insertNewUser(name, email, encryptedPassword));
    return buildResponse(res, 200, msg.success, null);
  } catch (err) {
    return buildResponse(res, 500, msg.errFailedRegister, null);
  }
};

const login = async (req, res) => {
  const err = loginValidation(req.body);
  if (err) {
    return buildResponse(res, 422, err, null);
  }

  try {
    const { user, err } = await validateRequestLogin(req.body);
    if (err) {
      return buildResponse(res, 422, err, null);
    }

    const { accessToken, refreshToken } = generateTokens(user);

    const data = {
      accessToken,
      refreshToken,
    };

    return buildResponse(res, 200, msg.success, data);
  } catch (err) {
    return buildResponse(res, 500, msg.errFailedLogin, null);
  }
};

module.exports = { register, login };
