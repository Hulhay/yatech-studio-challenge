const db = require("../config");
const bcrypt = require("bcrypt");
const { buildResponse, msg } = require("../utils");
const { getUserByEmailQuery, insertNewUser } = require("./query");
const { registerValidation } = require("./validation");

const register = async (req, res) => {
  const err = registerValidation(req.body);
  if (err) {
    return buildResponse(res, 422, err, null);
  }

  const { name, email, password } = req.body;

  const encryptedPassword = await bcrypt.hash(password, 10);

  try {
    const result = await db.query(getUserByEmailQuery(email));
    if (result[0].length > 0) {
      return buildResponse(res, 422, msg.errEmailExist, null);
    }

    await db.query(insertNewUser(name, email, encryptedPassword));
    return buildResponse(res, 200, msg.success, null);
  } catch (err) {
    return buildResponse(res, 500, msg.errFailedRegister, null);
  }
};

module.exports = { register };
