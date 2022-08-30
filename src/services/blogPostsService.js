const Sequelize = require('sequelize');
const config = require('../database/config/config');

const sequelize = new Sequelize(config.development);
const CustomError = require('../errors/CustomError');
const { BlogPost } = require('../database/models');
const { PostCategory } = require('../database/models');
const { Category } = require('../database/models');
const { User } = require('../database/models');

const validateCategories = async (categoryIds) => {
  const categories = categoryIds.map((id) => Category.findByPk(id));
  const categoriesSearch = await Promise.all(categories);
  const categoriesAreValid = categoriesSearch.some(Boolean);
  return categoriesAreValid;
};

const create = async ({ title, content, categoryIds, email }) => {
  const categoriesAreValid = await validateCategories(categoryIds);
  if (!categoriesAreValid) throw new CustomError(400, 'BAD_REQUEST', '"categoryIds" not found');
  const transaction = await sequelize.transaction();
  try {
    const { id: userId } = await User.findOne({ where: { email } });
    const payloadBlogPost = { title, content, userId, published: Date.now(), updated: Date.now() };
    const newBlogPost = await BlogPost.create(payloadBlogPost, { transaction });
    const postId = newBlogPost.null;
    const newPostCategories = categoryIds
      .map((categoryId) => PostCategory.create({ categoryId, postId }, { transaction }));
    await Promise.all(newPostCategories);
    transaction.commit();
    newBlogPost.dataValues.id = postId;
    return newBlogPost;
  } catch (error) {
    transaction.rollback();
    throw new Error(error);
  }
};

const findAll = async () => {
  const blogPosts = await BlogPost
    .findAll({ include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories' }],
    });
  return blogPosts;
};

const findByPk = async (id) => {
  const blogPost = await BlogPost
  .findByPk(id, { include: [
    { model: User, as: 'user', attributes: { exclude: ['password'] } },
    { model: Category, as: 'categories' }],
  });
  if (!blogPost) throw new CustomError(404, 'NOT_FOUND', 'Post does not exist');
  return blogPost;
};

module.exports = {
  create,
  findAll,
  findByPk,
};
