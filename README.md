# Bamazon App

### Overview

Bamazon is an app that displays information about products in the terminal, and then asks what product the user would like to buy and the quantity of the item they would like to buy.  And then if the user wants more than is in stock, responds with insufficient quantity response. And if they can buy processes the transaction and updates the database to reflect the purchase.

## How It Works

Run the program by typing bamazonCustomer.js in the terminal.  A list is displayed containing items.  Input a selection based on product ID, input the quantity desired.  Afterwards it updates the database.

Table displays in the terminal.
![table-display](https://github.com/gknafey/bamazon/blob/master/images/image.PNG)

User is asked for input about what product they want.
![input-product-id](https://github.com/gknafey/bamazon/blob/master/images/image1.PNG)

User is asked what quantity of the product they want.  And the result if the quantity is available. Which is your order is processing.
![input-quantity-with-success](https://github.com/gknafey/bamazon/blob/master/images/image2.PNG)

User is notified that the order cannot be processed because of insufficient stock.
![input-quantity-with-fail](https://github.com/gknafey/bamazon/blob/master/images/image3fail.PNG)

##Code

In the beginning of the code the dependencies are required and the connection is made to the bamazon_db.  Under connection.connect, the bamazonLoad(); function is called to start the app. Which welcomes you to the store and then displays the information on the products. Afterwards the buyAnItem(); function is called which prompts the user using inquirer to input the product ID they want and how much of it they want then it either says insufficient quantity to fufill the order or processes it and updates the database using the last function named editQuantity(); which subtracts the quantity desired from the stock_quantity and also calculates the total cost of the purchase. 

## Technology Used

The app makes use of the following:
    *mysql
    *inquirer

## My role

I coded all of the bamazonCustomer.js file.