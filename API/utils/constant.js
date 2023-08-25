const emailFormat =
  /^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;

const msg = {
  // 200
  success: "success",

  // 400
  errMalformatRequest: "malformat request",

  // 401
  errEmptyAuthorization: "authorization is empty",
  errInvalidAuthorization: "invalid authorization",

  // 403
  errInvalidToken: "invalid token",

  // 404
  errEmailNotFound: "email not found",
  errProductNotFound: "product not found",

  // 422
  errEmptyProductId: "productID cannot be empty",
  errEmptyName: "name cannot be empty",
  errEmptyEmail: "email cannot be empty",
  errEmailFormat: "invalid email format",
  errEmptyPassword: "password cannot be empty",
  errShortPassword: "password must have a minimum of 8 characters",
  errEmailExist: "email already exists",
  errWrongPassword: "wrong password",
  errEmptyToken: "token cannot be empty",
  errInvalidRefreshToken: "invalid refresh token",
  errEmptyPrice: "price cannot be empty",

  // 500
  errFailedRegister: "failed to regsiter",
  errFailedLogin: "failed to login",
  errFailedInsertProduct: "failed to insert product",
  errFailedGetProduct: "failed to get product",
  errFailedUpdateProduct: "failed to update product",
  errFailedDeleteProduct: "failed to delete product",
};

module.exports = { msg, emailFormat };
