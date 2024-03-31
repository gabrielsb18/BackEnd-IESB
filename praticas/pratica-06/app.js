const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const produtosRouter = require('./routes/produtos');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/produtos', produtosRouter);

module.exports = app;