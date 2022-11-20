const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const connectDB = require('./server/database/connection');
const morgan = require('morgan');
const parth = require('path');
const sass = require('node-sass');
require('dotenv').config({ path: './config.env' });

const port = process.env.PORT||3000;

// EJS
app.set('view engine', 'ejs');

// SCSS
app.use(express.static(__dirname + '/assets/scss'));

// Log requests
app.use(morgan('tiny'));

// DB Connection
connectDB();

// Parse request to body-parser
app.use(bodyParser.urlencoded({ extended:true }));

// View Engine
app.set('view engine', 'ejs');

// Load Router 
app.use('/', require('./server/routes/router'));

app.listen(port);