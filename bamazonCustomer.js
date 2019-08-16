// Dependencies--------------
var inquirer = require("inquirer");
var mysql = require("mysql");

// connection information to bamazon_db--------
var connection = mysql.createConnection({
    host: "localhost",
    
    // port number
    port: 3306,

    // username
    user:"root",

    // password and database
    password: "pass",
    database: "bamazon_db"
});

// connection to the bamazon database
connection.connect(function(err) {
    if(err) throw err;
    // commmand to start the code here
    
})

