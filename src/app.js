const compression = require('compression');
const express = require('express');
const { default: helmet } = require('helmet');
const morgan = require('morgan');
const app = express();

// init middlewares
app.use(morgan('combined'));
app.use(helmet());
app.use(compression());

// init db
require('./databases/init.mongodb');

// init routers
app.use('/', require('./routes'));

// handle errors

module.exports = app;