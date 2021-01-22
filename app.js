const express = require('express');
const app = express();
const morgan = require('morgan'); //nr
const pg = require('pg');
const client = new pg.Client('postgres://localhost/wikistack');
const { layout } = require('./views/layout');
const path = require('path'); //express nr

app.use(morgan('dev')); //invokes it - nr
app.use(express.static(__dirname + './public')); 
app.use(express.urlencoded({extended: false}));//has to be invoked middle w

const PORT = 3000;

app.get('/', (req, res) => {
    res.send(layout(''));
});
const PORT = 3000;


