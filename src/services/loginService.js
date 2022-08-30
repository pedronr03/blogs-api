require('dotenv').config();
const CustomError = require('../errors/CustomError');
const { User } = require('../database/models');
const jwt = require('../helpers/jwt');

const login = async ({ email, password }) => {
  const user = await User.findOne({ where: { email, password } });
  if (!user) throw new CustomError(400, 'BAD_REQUEST', 'Invalid fields');
  const token = jwt.sign({ email, password });
  return token;
};

module.exports = {
  login,
};