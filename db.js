const mysql=require('mysql2');
const dbConfig = require("./config/config");
var connection=mysql.createConnection({
    host:dbConfig.HOST,
    user:dbConfig.USER,
    password:dbConfig.PASSWORD,
    database:dbConfig.DB
})
module.exports=connection
