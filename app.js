const express = require('express');
const app = express();
const morgan = require('morgan');
const pg = require('pg');
const client = new pg.Client('postgres://localhost/wikistack');
const { layout } = require('./views/layout');
const path = require('path'); //express

app.use(morgan('dev')); //invokes it
app.use(express.static(__dirname + './public'));
app.use(express.urlencoded({extended: false}));//has to be invoked

const PORT = 3000;

app.get('/', (req, res) => {
    res.send(layout(''));
});


