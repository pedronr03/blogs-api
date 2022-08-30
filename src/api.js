require('express-async-errors');
const express = require('express');
const loginRoute = require('./routes/loginRoute');
const userRoute = require('./routes/userRoute');
const categoriesRoute = require('./routes/categoriesRoute');
const errorMiddleware = require('./middlewares/errorMiddleware');

const app = express();

app.use(express.json());

app.use('/login', loginRoute);

app.use('/user', userRoute);

app.use('/categories', categoriesRoute);

app.use(errorMiddleware);

module.exports = app;
