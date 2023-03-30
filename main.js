"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var moment_1 = require("moment");
var express = require('express');
var app = express();
app.set('view engine', 'pug');
app.use(express.json());
app.use(express.urlencoded());
var port = 5000;
app.get('/', function (req, res) {
    console.log(req.date_input);
    res.render('main', { greeting: "Hi Welcome to Fansville" });
});
app.post('/', function (req, res) {
    console.log ( "ugh")
    console.log(req.date_input.json());
});
app.listen(port, function () {
    console.log((0, moment_1.default)().toLocaleString());
    console.log("[server]: Server is running at http://localhost:".concat(port));
});
