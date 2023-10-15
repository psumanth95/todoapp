let express = require("express");
let mysql = require("mysql2");
let cors = require("cors");
var app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

var sql="create table Users(id int not null auto_increment,username varchar(30),password varchar(250),email varchar(50),created_at date,update_at date,primary key(id))";
var connection=mysql.createConnection({
    host:'database-1.ccmd6j6rmnku.us-east-1.rds.amazonaws.com',
    user:'admin',
    password:'password',
    database:'sampledb'
})
connection.connect(function (err) {
    if (!err) {
      console.log("Database is connected");
    } else {
      console.log("Error while connecting with database");
    }
  });
  connection.query(sql, (error, results) => {
    if (error) {
      console.log(error);
    } else {
      console.log(results);
      console.log("table is created");
    }
  });