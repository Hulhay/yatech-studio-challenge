const { emailFormat, msg } = require("../../utils");

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

module.exports = { registerValidation };
