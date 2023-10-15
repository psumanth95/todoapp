const express=require("express");
let app=express();
const bodyParser=require("body-parser");
let cors=require('cors');
const connection=require("./db.js");
app.use(express.urlencoded({extended:true}));
app.use(express.json({type:"application/json"}));
app.use(express.json());
app.use(cors());
let port=3000;
//############CONNECTING DATABASE#############
connection.connect(function (err) {
    if (!err) {
      console.log("ESTABLISHED THE CONNECTION :DATABASE IS CONNECTED");
    } else {
        console.log("err",err);
        console.log("CONNECTION FAILED:DATABASE NOT CONNECTED");
    }
  });
//############IMPORT TODO APIS#############
  var todoRouter = require('./routers/todorouters.js');
app.use('/api',todoRouter);
//############SERVER RUNNING#############
  app.listen(port, function (error) {
    if (error) throw console.log(error);
    console.log(`SERVER CONNECTED SUCCESSFULLY ON PORT ${port}`);
  });
