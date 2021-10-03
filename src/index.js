import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import path from 'path';
//const express = require('express');
//const morgan = require('morgan');
//const cors=require('cors');
const mongoose = require('mongoose');

const app = express();
mongoose.connect('mongodb://localhost/messa-database')
    .then(db => console.log('DB is connected'))
    .catch(err => console.error(err))

//Settings
app.set('port', process.env.PORT || 4000);

//Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extende:true}));
app.use(express.static(path.join(__dirname,'public')));
app.use(cors());

//Routes
app.use('/productos',require('./routes/productos'));

//Static files
app.use(express.static(__dirname + '/public'));

//Server is listening
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
    console.log(path.join(__dirname,'public'));
});
