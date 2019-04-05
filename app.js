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

// app.get('/', (req, res) => {
//     res.send('Hello World!');
// });

// visit vue single page.
app.get('*', function(req, res) {
    var html = html = fs.readFileSync(path.resolve(__dirname, 'index.html'), 'utf-8');
    res.send(html);
});

global.db = db;

// routes for the app
/*
app.get('/', getHomePage);
app.get('/add', addPlayerPage);
app.get('/edit/:id', editPlayerPage);
app.get('/delete/:id', deletePlayer);
app.post('/add', addPlayer);
app.post('/edit/:id', editPlayer);
*/

// set the app to listen on the port
app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});