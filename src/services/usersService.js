const CustomError = require('../errors/CustomError');
const { User } = require('../database/models');
const jwt = require('../helpers/jwt');

const login = async ({ email, password }) => {
  const userAlreadyExists = await User.findOne({ where: { email, password } });
  if (!userAlreadyExists) throw new CustomError(400, 'BAD_REQUEST', 'Invalid fields');
  const token = jwt.sign({ email });
  return token;
};

const create = async ({ displayName, email, password, image }) => {
  const userAlreadyExists = await User.findOne({ where: { email } });
  if (userAlreadyExists) throw new CustomError(409, 'CONFLICT', 'User already registered');
  await User.create({ displayName, email, password, image });
  const token = jwt.sign({ displayName, email, image });
  return token;
};

const findAll = async () => {
  const users = await User.findAll({ attributes: { exclude: ['password'] } });
  return users;
};

const findByPk = async (id) => {
  const user = await User.findByPk(id, { attributes: { exclude: ['password'] } });
  if (!user) throw new CustomError(404, 'NOT_FOUND', 'User does not exist');
  return user;
};

module.exports = {
  login,
  create,
  findByPk,
  findAll,
};