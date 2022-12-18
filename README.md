DESCRIPTION
Duration: 1 day

In this assignment we solved the problem of creating a full stack working to do list application that allows us to both create render and store list items.

To see the fully functional site, please visit: http://localhost:5010

Prerequisites

Node.js
Express
Jquerry
body-parser
bootstrap
luxon
pg

To get this project running youll have to start by running an NPM install and make sure at  the very least PG, Node, jquerry, body parser and Express are all installed so that our server can run and our database is able to communicate with our project.


Create a database named toDoList,
The queries in the database.sql file are set up to create all the necessary tables and populate the needed data to allow the application to run correctly. The project is built on Postgres, so you will need to make sure to have that installed. We recommend using Postico to run those queries as that was used to create the queries,
Open up your editor of choice and run an npm install
Run npm run server in your terminal
Run npm run client in your terminal
The npm run client command will open up a new browser tab for you!
Usage

How does someone use this application? Tell a user story here.

To use the application simply input a list item into the form and hit the add button.
Once you have the list item in the table you will see two buttons. The done button will turn the text green and display a done prompt while the delete button will delete the list item from the dom and data base.

Built With
jquery
node
express
postgres
postico

Acknowledgement

Thanks to Prime Digital Academy who equipped and helped me to make this