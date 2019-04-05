var express = require('express'),
      path = require('path'),
      bodyParser = require('body-parser'),
      mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/vuenodedb").then(
          () => {console.log('Database connection is successful') },
          err => { console.log('Error when connecting to the database'+ err)}
);

const app = express();
app.use(express.static('public'));
app.use(bodyParser.json());

var port = process.env.PORT || 4000;

app.listen( ()=>{
        console.log('Listening on port ' + port);
});