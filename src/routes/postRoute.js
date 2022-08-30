const { Router } = require('express');
const blogPostsController = require('../controllers/blogPostsController');
const authCreatePost = require('../middlewares/authCreatePost');
const authToken = require('../middlewares/authToken');

const route = Router();

route.get('/:id', authToken, blogPostsController.findByPk);

route.get('/', authToken, blogPostsController.findAll);

route.post('/', authToken, authCreatePost, blogPostsController.create);

module.exports = route;