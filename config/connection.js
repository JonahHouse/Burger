const mysql = require('mysql');

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  port: "3306",
  database: "burgers_db"
});

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});

module.exports = con;