const { db } = require("../config");
const { buildResponse, msg } = require("../utils");
const {
  insertNewProduct,
  getProductsFromDB,
  getProductByIDFromDB,
  updateProductDB,
  deleteProductDB,
} = require("./query");
const {
  validateInsertProduct,
  validateUpdateProduct,
} = require("./validation");

const insertProducts = async (req, res) => {
  const err = validateInsertProduct(req.body);
  if (err) {
    return buildResponse(res, 422, err, null);
  }

  const { name, price } = req.body;

  try {
    await db.query(insertNewProduct(name, price));
    return buildResponse(res, 201, msg.success, null);
  } catch (err) {
    return buildResponse(res, 500, msg.errFailedInsertProduct, null);
  }
};

const getProducts = async (_, res) => {
  try {
    const result = await db.query(getProductsFromDB());
    if (result[0].length === 0) {
      return buildResponse(res, 404, msg.errProductNotFound, null);
    }
    return buildResponse(res, 200, msg.success, result[0]);
  } catch (err) {
    return buildResponse(res, 500, msg.errFailedGetProduct, null);
  }
};

const updateProduct = async (req, res) => {
  const { id } = req.params;
  const { name, price } = req.body;

  const err = validateUpdateProduct(req);
  if (err) {
    return buildResponse(res, 422, err, null);
  }

  try {
    const result = await db.query(getProductByIDFromDB(id));
    if (result[0].length === 0) {
      return buildResponse(res, 404, msg.errProductNotFound, null);
    }
    await db.query(updateProductDB(id, name, price));
    return buildResponse(res, 200, msg.success, null);
  } catch (err) {
    return buildResponse(res, 500, msg.errFailedUpdateProduct, null);
  }
};

const deleteProduct = async (req, res) => {
  const { id } = req.params;

  try {
    const result = await db.query(getProductByIDFromDB(id));
    if (result[0].length === 0) {
      return buildResponse(res, 404, msg.errProductNotFound, null);
    }
    await db.query(deleteProductDB(id));
    return buildResponse(res, 200, msg.success, null);
  } catch (err) {
    return buildResponse(res, 500, msg.errFailedDeleteProduct, null);
  }
};

module.exports = { insertProducts, getProducts, updateProduct, deleteProduct };
