const emailFormat =
  /^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;

const msg = {
  // 200
  success: "success",

  // 404
  errEmailNotFound: "email not found",

  // 422
  errEmptyName: "name cannot be empty",
  errEmptyEmail: "email cannot be empty",
  errEmailFormat: "invalid email format",
  errEmptyPassword: "password cannot be empty",
  errShortPassword: "password must have a minimum of 8 characters",
  errEmailExist: "email already exists",
  errWrongPassword: "wrong password",

  // 500
  errFailedRegister: "failed to regsiter",
  errFailedLogin: "failed to login",
};

module.exports = { msg, emailFormat };
