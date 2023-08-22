const { buildResponse } = require("../utils");

const getPrivateMessage = (req, res) => {
  return buildResponse(res, 200, `Hello Yatech Studio. User with email ${req.tokenData.email} success to access`, null);
};

module.exports = { getPrivateMessage };