const path = require('path');
const express = require('express');
const morgan = require('morgan');
const viewRouter = require('./routes/main');

const app = express();

app.use(express.json()); 

// Access to public
app.use(express.static(path.join(__dirname, 'public')));

// 1) Middleware
app.use('/', viewRouter);

app.get('/overview', (req, res) =>{
    res.sendFile(path.join(__dirname, 'views', 'test.html'));
});

app.use((req,res) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

// Notes for html only you cannot yield content like in php or django, so its better to use EJS. 

module.exports = app;

