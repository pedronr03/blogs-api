const { Router } = require('express');
const blogPostsController = require('../controllers/blogPostsController');
const authCreatePost = require('../middlewares/authCreatePost');
const authUpdatePost = require('../middlewares/authUpdatePost');
const authToken = require('../middlewares/authToken');

const route = Router();

route.get('/:id', authToken, blogPostsController.findByPk);

route.put('/:id', authToken, authUpdatePost, blogPostsController.update);

route.delete('/:id', authToken, blogPostsController.destroy);

route.get('/', authToken, blogPostsController.findAll);

route.post('/', authToken, authCreatePost, blogPostsController.create);

module.exports = route;