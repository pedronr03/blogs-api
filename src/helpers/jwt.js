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

const decode = (token) => {
  const decodeToken = jwt.decode(token, JWT_SECRET);
  return decodeToken;
};

module.exports = {
  sign,
  decode,
};