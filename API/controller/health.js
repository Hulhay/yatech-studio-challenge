const { buildResponse } = require("../utils");

const getHealth = (_, res) => {
  return buildResponse(res, 200, "I am feeling fine", null);
};

module.exports = { getHealth };
