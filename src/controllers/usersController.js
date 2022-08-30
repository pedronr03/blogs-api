const usersService = require('../services/usersService');

const login = async (req, res) => {
  const token = await usersService.login(req.body);
  return res.status(200).json({ token });
};

const create = async (req, res) => {
  const token = await usersService.create(req.body);
  return res.status(201).json({ token });
};

const findAll = async (_req, res) => {
  const users = await usersService.findAll();
  return res.status(200).json(users);
};

const findByPk = async (req, res) => {
  const { id } = req.params;
  const user = await usersService.findByPk(id);
  return res.status(200).json(user);
};

const destroy = async (req, res) => {
  const { authorization: token } = req.headers;
  await usersService.destroy(token);
  return res.status(204).end();
};

module.exports = {
  login,
  create,
  findByPk,
  findAll,
  destroy,
};