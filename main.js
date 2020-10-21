"use strict";

const express = require('express');
const bodyParser = require("body-parser");
const app = express();
const fs = require('fs');

//Using body-parser middleware
app.use(bodyParser.urlencoded({ extended: true }));

//Static route to the main folder
app.use(express.static(__dirname + '/views'));
app.use(express.static(__dirname + '/public/images'));
app.use(express.static(__dirname + '/public/css'));


//Index page - main
app.get('/', (req, res) => {
    res.sendFile('index');
});


//Courses page
app.get('/courses', (req, res) => {
    res.sendFile('courses.html');
});


//Contact page
app.get('/contact', (req, res) => {
    res.sendFile('contact.html');
});

//Thanks page
app.post('/thanks',(req,res) =>{
    res.sendFile(__dirname + "/views/thanks.html");
})


//Console started
app.listen(3000, () => {
    console.log('The application is running on localhost:3000!')
});


