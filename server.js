#!/usr/bin/env nodejs
var express = require('express');
var mysql = require('mysql');
var app = express();

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'submitform',
    password: 'submitauth',
    database: 'emails'
});

connection.connect(function(error) {
    if(!!error){
        console.log('Error connecting to database');
    }else {
        console.log('Connected to database');
    }
});


app.use('/', express.static('.'));
app.use(express.urlencoded());

app.post('/submit-email', (req,res) => {
	var subemail = req.body.email;
	connection.query(`INSERT INTO submittedemails ( id, email ) VALUES ( null, ${subemail.toString()} ); `, 
    (error,results,fields) => {
        if(!!error){
            console.log('Error in the query');
        }else {
            console.log('Query successful');
            res.send(results);
            console.log(results);
        }
        
    });
});


app.listen(8083,'localhost');
