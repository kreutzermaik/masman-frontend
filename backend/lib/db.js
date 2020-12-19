const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "masman",
  password: ""
});
connection.connect();

module.exports = connection;
