const CustomError = require('../errors/CustomError');
const jwt = require('../helpers/jwt');

const authToken = (req, _res, next) => {
  const { authorization } = req.headers;
  if (!authorization) throw new CustomError(401, 'UNAUTHORIZED', 'Token not found');
  const tokenIsValid = jwt.decode(authorization);
  if (!tokenIsValid) throw new CustomError(401, 'UNAUTHORIZED', 'Expired or invalid token');
  next();
};

module.exports = authToken;