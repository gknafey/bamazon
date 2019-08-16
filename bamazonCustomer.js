// Dependencies--------------
var inquirer = require("inquirer");
var mysql = require("mysql");

// connection information to bamazon_db--------
var connection = mysql.createConnection({
    host: "localhost",

    // port number
    port: 3306,

    // username
    user: "root",

    // password and database
    password: "pass",
    database: "bamazon_db"
});

// connection to the bamazon database
connection.connect(function (err) {
    if (err) throw err;
    // commmand to start the code here
    bamazonLoad();


})

const bamazonLoad = () => {
    connection.query("SELECT * FROM products", function (err, data) {
        if (err) throw err;

        // console.log(data);
        console.log("Welcome to the Store!\nHere is our selection of items!");
        console.log("-------------------------------------------------------");

        for (let i = 0; i < data.length; i++) {

            console.log("Product ID: " + data[i].id);
            console.log("Product: " + data[i].product_name);
            console.log("Department: " + data[i].department_name);
            console.log("Price: " + data[i].price);
            console.log("Stock: " + data[i].stock_quantity);
            console.log("--------------------------------------");
        };

        buyAnItem();
    });


};

const buyAnItem = () => {
    inquirer
        .prompt([
            {
                name: "product",
                type: "input",
                message: "What item would you like to buy? Please input the Product ID to select an item",
                validate: function (value) {
                    if (isNaN(value) === false) {
                        return true;
                    }
                    return false;
                }
            },
            {
                name: "quantity",
                type: "input",
                message: "How many of this product would you like to buy?",
                validate: function (value) {
                    if (isNaN(value) === false) {
                        return true;
                    }
                    return false;
                }
            }
        ])
        .then(function (answer) {
            var query = "SELECT product_name, price, id, stock_quantity FROM products WHERE ?"
            connection.query(query, { id: answer.product }, function (err, res) {
                if (err) throw err;
                // for (let i = 0; i < res.length; i++) {
                //     if (answer.product === res[i].id) {
                //         console.log(answer.product);
                //         console.log(res[i].id);
                //     }
                // // }
                if (answer.quantity > res[0].stock_quantity) {
                    console.log("Insufficient quantity to fufill your order!!");
                    console.log("Please make another selection!");
                    buyAnItem();
                }
                else {
                    console.log("Your order has being processed!");
                    editQuantity(answer.product, answer.quantity, res[0].price, res[0].stock_quantity);
                }

                // console.log(answer.product);
                // console.log(res[0].product_name);
                // console.log(res[0].id);
                // console.log(res[0].price);
                // console.log(res[0].stock_quantity);
                // console.log(res);
            })

            // connection.end();

        })


}

const editQuantity = (id, quantity, price, stockQ)=> {

    var newQuantity = stockQ - quantity;

    var cost = quantity * price;

    var query = "UPDATE products SET stock_quantity = ? WHERE id = ?"
    connection.query(query, [newQuantity, id], function (err, res) {
        if (err) throw err;
        console.log(`The total for your purchase comes out to $${cost}`);
        connection.end();
    })
};
