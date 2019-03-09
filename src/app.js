const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const errorHandler = require('errorhandler');
const methodOverride = require('method-override');
const router = require('./router');

const env = process.env.NODE_ENV || 'development';
const app = express();
app.set('port', process.env.PORT);

// load middlewares
app.use(morgan('dev'));
app.use(methodOverride());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())
app.use(cors());
app.use('/api/v1', router);

if (env === 'development') app.use(errorHandler());

module.exports = app;