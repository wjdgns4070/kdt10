// app.js

const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Add this line to include the routes
const indexRouter = require('./routes/index');
app.use('/', indexRouter);

module.exports = app;
