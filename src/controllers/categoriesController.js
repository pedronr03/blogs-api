const categoriesService = require('../services/categoriesService');

const create = async (req, res) => {
  const { name } = req.body;
  const category = await categoriesService.create(name);
  return res.status(201).json(category);
};

const findAll = async (req, res) => {
  const categories = await categoriesService.findAll();
  return res.status(200).json(categories);
};

const findByPk = async (req, res) => {
  const { id } = req.params;
  const category = await categoriesService.findByPk(id);
  return res.status(200).json(category);
};

module.exports = {
  create,
  findAll,
  findByPk,
};