const { getUserByEmailQuery, insertNewUser } = require("./user_query");
const {
  insertNewProduct,
  getProductsFromDB,
  updateProductDB,
  deleteProductDB,
  getProductByIDFromDB,
} = require("./product_query");

module.exports = {
  getUserByEmailQuery,
  insertNewUser,
  insertNewProduct,
  getProductsFromDB,
  updateProductDB,
  deleteProductDB,
  getProductByIDFromDB,
};
