const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const friends = require('./app/data/friends');

const app = express();
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());


const htmlRoutes = require('./routing/htmlRoutes')(app, path);
const apiRoutes = require('./routing/apiRoutes')(app, friends);


let PORT = process.env.PORT || 3000;




app.listen(PORT, function() {
    console.log("Listening on port " + PORT);
})