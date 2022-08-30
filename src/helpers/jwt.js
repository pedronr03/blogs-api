require('dotenv').config();
const jwt = require('jsonwebtoken');

const { JWT_SECRET } = process.env;

const JWT_CONFIG = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

const sign = (data) => {
  const token = jwt.sign(data, JWT_SECRET, JWT_CONFIG);
  return token;
};

const verify = (token) => {
  const decode = jwt.decode(token, JWT_SECRET);
  return !!decode;
};

module.exports = {
  sign,
  verify,
};