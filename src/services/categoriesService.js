const CustomError = require('../errors/CustomError');
const { Category } = require('../database/models');

const create = async (name) => {
  const category = await Category.create({ name });
  return category;
};

const findAll = async () => {
  const categories = await Category.findAll();
  return categories;
};

const findByPk = async (id) => {
  const category = await Category.findByPk(id);
  if (!category) throw new CustomError(404, 'NOT_FOUND', 'Category does not exist');
  return category;
};

module.exports = {
  create,
  findAll,
  findByPk,
};