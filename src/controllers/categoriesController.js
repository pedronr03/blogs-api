const categoriesService = require('../services/categoriesService');

const create = async (req, res) => {
  const { name } = req.body;
  const category = await categoriesService.create(name);
  return res.status(201).json(category);
};

module.exports = {
  create,
};