const { Router } = require('express');
const categoriesController = require('../controllers/categoriesController');
const authCreateCategory = require('../middlewares/authCreateCategory');
const authToken = require('../middlewares/authToken');

const route = Router();

route.post('/', authToken, authCreateCategory, categoriesController.create);

module.exports = route;