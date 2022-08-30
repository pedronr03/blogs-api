const { Router } = require('express');
const loginController = require('../controllers/loginController');
const authLogin = require('../middlewares/authLogin');

const route = Router();

route.post('/', authLogin, loginController.login);

module.exports = route;