const { Router } = require('express');
const usersController = require('../controllers/usersController');
const authCreateUser = require('../middlewares/authCreateUser');

const route = Router();

route.post('/', authCreateUser, usersController.create);

module.exports = route;