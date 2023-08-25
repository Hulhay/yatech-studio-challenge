const { db } = require("../../config");
const { msg } = require("../../utils/constant");
const { getProductByIDFromDB } = require("../query");

const validateInsertProduct = (req) => {
  const { name, price } = req;

  if (!name) {
    return msg.errEmptyName;
  }

  if (price < 1) {
    return msg.errEmptyPrice;
  }

  return "";
};

const validateUpdateProduct = (req) => {
  const { name, price } = req.body;
  const { id } = req.params;

  const valid = parseInt(id);
  if (!valid) {
    return msg.errMalformatRequest;
  }

  if (!name) {
    return msg.errEmptyName;
  }

  if (price < 1) {
    return msg.errEmptyPrice;
  }

  return "";
};

const validateGetProductByID = async (id) => {
  const result = await db.query(getProductByIDFromDB(id));
  if (result[0].length === 0) {
    return msg.errProductNotFound;
  }

  return "";
};

module.exports = {
  validateInsertProduct,
  validateUpdateProduct,
  validateGetProductByID,
};
