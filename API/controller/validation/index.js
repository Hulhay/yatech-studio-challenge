const {
  registerValidation,
  loginValidation,
  validateEmailRegister,
  validateRequestLogin,
  validateRefreshToken,
} = require("./auth_validation");

const {
  validateInsertProduct,
  validateGetProductByID,
  validateUpdateProduct,
} = require("./product_validation");

module.exports = {
  registerValidation,
  loginValidation,
  validateEmailRegister,
  validateRequestLogin,
  validateRefreshToken,
  validateInsertProduct,
  validateGetProductByID,
  validateUpdateProduct,
};
