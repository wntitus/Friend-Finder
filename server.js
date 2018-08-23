
// setting our requirements for express, bodyparser, and path as well as our friends data file
const express = require('express');
const bodyParser = require('body-parser');

// creating our express app and then using bodyparser middleware for JSON handling
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// requiring our external routes files
require('./routing/htmlRoutes')(app);
require('./routing/apiRoutes')(app);

// setting our port for local testing and deployment
let PORT = process.env.PORT || 3000;

// setting the server to listen on the port
app.listen(PORT, function() {
    console.log("Listening on port " + PORT);
})