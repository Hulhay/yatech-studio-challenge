const db = require("../config");
const { buildResponse } = require("../utils");

const getHealth = (_, res) => {
  buildResponse(res, 200, "I am feeling fine", null);
};

module.exports = { getHealth };
