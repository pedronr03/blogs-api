const usersService = require('../services/usersService');

const login = async (req, res) => {
  const token = await usersService.login(req.body);
  return res.status(200).json({ token });
};

const create = async (req, res) => {
  const token = await usersService.create(req.body);
  return res.status(201).json({ token });
};

module.exports = {
  login,
  create,
};