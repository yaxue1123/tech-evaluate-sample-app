// express to create the API
const express = require('express');
const fs = require('fs');
// bodyparser allows the backend to read data sent from frontend
const bodyParser = require('body-parser');
const mysql = require('mysql');
const path = require('path');

const app = express();
const port = 3000;

// configure middilewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// enable cors on express.js

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
  
// create connection to database
// the mysql.createConnection function takes in a configuration object which contains host, user, password and the database name.
const db = mysql.createConnection ({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'sample_app'
});

// connect to database
db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('Connected to database');
});

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/api/products', (req, res) => {
    let sql = "SELECT * FROM products";
    db.query(sql, function (err, result) {
        if (err) {
            throw err
        };
        res.send(result);
    });
});

app.get('/api/products/:id', (req, res) => {
    let sql = "SELECT * FROM products WHERE id = " + req.params.id;
    db.query(sql, function (err, result) {
        if (err) {
            throw err
        };
        res.send(result);
    });
});

// visit vue single page.
// app.get('*', function(req, res) {
//     var html = fs.readFileSync(path.resolve(__dirname, 'index.html'), 'utf-8');
//     res.send(html);
// });

// set the app to listen on the port
app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});