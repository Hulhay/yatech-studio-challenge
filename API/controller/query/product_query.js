const insertNewProduct = (name, price) => {
  return `INSERT INTO products (name, price) VALUES ('${name}', '${price}')`;
};

const getProductsFromDB = () => {
  return `SELECT * FROM products`;
};

const getProductByIDFromDB = (id) => {
  return `SELECT * FROM products WHERE id=${id}`;
};

const updateProductDB = (id, name, price) => {
  return `UPDATE products SET name='${name}', price=${price} WHERE id=${id}`;
};

const deleteProductDB = (id) => {
  return `DELETE FROM products WHERE id=${id}`;
};

module.exports = {
  insertNewProduct,
  getProductsFromDB,
  updateProductDB,
  deleteProductDB,
  getProductByIDFromDB,
};
