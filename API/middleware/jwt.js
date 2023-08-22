const jwt = require("jsonwebtoken");
const { buildResponse, msg } = require("../utils");
const { getJWTPrivateKey } = require("../config");

const authorizeJWT = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  if (!authHeader) {
    return buildResponse(res, 401, msg.errEmptyAuthorization, null);
  }

  const auth = authHeader.split(" ");
  if (auth.length < 2) {
    return buildResponse(res, 401, msg.errEmptyAuthorization, null);
  }

  if (auth[0] !== "Bearer") {
    return buildResponse(res, 401, msg.errInvalidAuthorization, null);
  }

  try {
    const tokenData = jwt.verify(auth[1], getJWTPrivateKey());
    req.tokenData = tokenData;
    next();
  } catch (err) {
    return buildResponse(res, 403, msg.errInvalidToken, null);
  }
};

module.exports = { authorizeJWT };
