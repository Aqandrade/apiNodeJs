const mysql = require('mysql');

mysql.createConnection({
    host:'localhost',
    port:'3306',
    user:'root',
    senha:'',
    database:'db'
});


module.exports = mysql;