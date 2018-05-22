
const express = require('express');
//const fileUpload= require('express-fileupload');

const router=express.Router();

//app.use(fileUpload());
//const path = require('path');
//const http=require('http');
const app=express();
const MongoClient=require('mongodb').MongoClient;
const ObjectID=require('mongodb').ObjectID;
//const api= require('./server/routes/api');
//require('mongoose');
//var multer = require('multer');
const path=require('path');
let db;

const connection=(closure) => {
    return MongoClient.connect('mongodb://localhost:27017', (err, client)=>{
        if (err) return console.log(err);
        db=client.db('mongodb');
        closure(db);

    });
};


const sendError =(err, res)=>{
    response.status=501;
    response.message=typeof err == 'object' ? err.message : err;
    res.status(501).json(response);
};

let response={
    status:200,
    data:[],
    message: null
};

router.post('/getProducts',(req, res) => {
    connection((db) => {
        db.collection('products')
        .find()
        .toArray()
        .catch((err)=>{
            sendError(err, res);
            response.message ={ success:"Se obtuvieron los registros correctamente", error:""};
            res.send({response});
        })
        .then((result)=>{

            response.data= result;
                res.send({response});
        });
    });
});

router.post('/getOne', (req, res) => {

  let find = { _id: new ObjectID(req.body.idd)};
  //const fin = {id: req.body.idd};
  console.log(find);

  connection((db) => {
    db.collection(req.body.collectionN.toString())
      .find(find)
      //.sort(req.body.order)
      //.limit(req.body.limit)
      .toArray()
      .catch((err) => {
        sendError(err, res);
        response.message = {success:"",error:err};
        res.send({response});
      })
      .then((result) => {
        response.data = result;
        response.ok = true;
        response.status = 1;
        response.message = {success:"Se obtuvo correctamente el registro",error:""};
        res.send({response});
      });
  });
});

module.exports=router;
