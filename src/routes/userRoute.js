const { Router } = require('express');
const usersController = require('../controllers/usersController');
const authCreateUser = require('../middlewares/authCreateUser');
const authToken = require('../middlewares/authToken');

const route = Router();

route.get('/:id', authToken, usersController.findByPk);

route.delete('/:id', authToken, usersController.destroy);

route.get('/', authToken, usersController.findAll);

route.post('/', authCreateUser, usersController.create);

module.exports = route;