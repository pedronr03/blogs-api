const { Router } = require('express');
const usersController = require('../controllers/usersController');
const authLogin = require('../middlewares/authLogin');

const route = Router();

route.post('/', authLogin, usersController.login);

module.exports = route;