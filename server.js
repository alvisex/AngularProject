const express = require('express');
const bodyParser = require('body-parser');
//const router=express.Router();

const http=require('http');
const app=express();
//const MongoClient=require('mongodb').MongoClient;
//const ObjectID=requiere('mngodb').ObjectID;
//require('mongoose');
const path=require('path');
const api= require('./server/routes/api');

//var db;



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));


app.use(express.static(path.join(__dirname, 'dist')));

app.use('/api',api);

app.get('*',(req,res)=>{
res.sendFile(path.join(__dirname, 'dist/index.html'));

});

const port=process.env.PORT || '4300';
app.set('port',port);
const server = http.createServer(app);

server.listen(port, () => console.log('Running on localhost: ${port}'));


