#!/usr/bin/env nodejs
var express = require('express');
var app = express();


app.use('/', express.static('.'));


app.listen(8083,'localhost');
