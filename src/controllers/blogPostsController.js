const blogPostsService = require('../services/blogPostsService');
const jwt = require('../helpers/jwt');

const create = async (req, res) => {
  const { authorization } = req.headers;
  const { email } = jwt.decode(authorization);
  const blogPost = await blogPostsService.create({ ...req.body, email });
  return res.status(201).json(blogPost);
};

const findAll = async (_req, res) => {
  const blogPosts = await blogPostsService.findAll();
  return res.status(200).json(blogPosts);
};

const findByPk = async (req, res) => {
  const { id } = req.params;
  const blogPost = await blogPostsService.findByPk(id);
  return res.status(200).json(blogPost);
};

const update = async (req, res) => {
  const { id } = req.params;
  const { authorization: token } = req.headers;
  const newBlogPost = await blogPostsService.update({ token, id, ...req.body });
  return res.status(200).json(newBlogPost);
};

module.exports = {
  create,
  findAll,
  findByPk,
  update,
};