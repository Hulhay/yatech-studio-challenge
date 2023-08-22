const buildResponse = (res, code, message, data) => {
  res.status(code).json({
    meta: {
      code,
      message,
    },
    data,
  });
};

module.exports = { buildResponse };
