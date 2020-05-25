'use strict';

const express = require('express');
const bodyParser = require('body-parser');
// const fileUpload = require('express-fileupload');
const path = require('path');
const mongodbConnect = require('./config/database');
// const env = require('./config/env');
const routes = require('./routes');

const app = express();
mongodbConnect();


// middlewares
app.use(bodyParser.json());
// app.use(fileUpload());
app.use('/static', express.static(path.join(__dirname, 'public')));   // serve static files

// routes
app.use('/api/candidates', routes.candidates);

app.use(function(req, res, next) {
    res.status(404).send('404 Not Found.');
});

module.exports = app;
