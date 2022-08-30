const { Router } = require('express');
const categoriesController = require('../controllers/categoriesController');
const authCreateCategory = require('../middlewares/authCreateCategory');
const authToken = require('../middlewares/authToken');

const route = Router();

route.get('/:id', authToken, categoriesController.findByPk);

route.get('/', authToken, categoriesController.findAll);

route.post('/', authToken, authCreateCategory, categoriesController.create);

module.exports = route;