const path = require('path');

// exporting our HTML routes for user navigation
module.exports = function(app) {
    app.get('/', function(req, res) {
        res.sendFile(path.join(__dirname, "../app/public/home.html"));
    })
    
    app.get('/survey', function(req, res) {
        res.sendFile(path.join(__dirname, "../app/public/survey.html"));
    })
}





