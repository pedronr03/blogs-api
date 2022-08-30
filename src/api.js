require('express-async-errors');
const express = require('express');
const loginRoute = require('./routes/loginRoute');
const errorMiddleware = require('./middlewares/errorMiddleware');

const app = express();

app.use(express.json());

app.use('/login', loginRoute);

app.use(errorMiddleware);

module.exports = app;
