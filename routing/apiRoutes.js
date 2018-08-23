
// requiring our friends data array to use in our GET and POST requests
let friendData = require('../app/data/friends');



// exporting our GET and POST routes for our API, when making a GET request to the API the friend data is sent back, when making a POST request the data will be pushed into the friend data array
module.exports = function(app) {
    app.get('/api/friends', function(req, res) {
        res.json(friendData);
    })

    app.post('/api/friends', function(req, res) {
        
        let newFriend = req.body;
        let friendMatchName = '';
        let friendMatchPhoto = '';

        let userScores = newFriend.scores;

        let totalDifference = 999;
    
        for (i = 0; i < friendData.length; i++) {
            let tempDiff = 0;
            for (o = 0; o < userScores.length; o++) {
                tempDiff += Math.abs(parseInt(friendData[i].scores[o]) - parseInt(userScores[o]))
            }
    
            if (tempDiff < totalDifference) {
                totalDifference = tempDiff;
                friendMatchName = friendData[i].name;
                friendMatchPhoto = friendData[i].photo;
            }
        }
    
        friendData.push(newFriend);

        res.json({name: friendMatchName, photo: friendMatchPhoto});
        
    })
}