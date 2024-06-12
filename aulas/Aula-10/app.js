require("dotenv").config();
const mongoose = require("mongoose");

const routerApidocs = require("./routes/router_apidocs.js")
const routerProdutos = require("./routes/router_produto.js")

var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

mongoose.connect(process.env.MONGODB_URL);

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/produtos", routerProdutos)
app.use("/api-docs", routerApidocs)

module.exports = app;