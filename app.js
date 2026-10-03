const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const weather = require('');
const {urlencoded} = require("express");

app.use(bodyParser, urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));