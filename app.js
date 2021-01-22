const express = require('express');
const app = express();
const morgan = require('morgan'); //nr
//const pg = require('pg');
// *const client = new pg.Client('postgres://localhost/wikistack');
const layout = require('./views/layout');
// const path = require('path'); //express.static -to join dirc name

app.use(morgan('dev')); //invokes it - nr
app.use(express.static('./public'));//app.use(express.static('public' 
app.use(express.urlencoded({extended: false}));//has to be invoked middle w

const PORT = 3001;

app.get('/', (req, res) => {
    res.send(layout(''));
});
app.listen(PORT, (req, res) => {
    console.log('hi')
    console.log('We are operating on 3001');
});



