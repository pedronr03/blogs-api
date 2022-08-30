const blogPostsService = require('../services/blogPostsService');
const jwt = require('../helpers/jwt');

const create = async (req, res) => {
  const { authorization } = req.headers;
  const { email } = jwt.decode(authorization);
  const blogPost = await blogPostsService.create({ ...req.body, email });
  return res.status(201).json(blogPost);
};

module.exports = {
  create,
};