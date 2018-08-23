
// requiring our friends data array to use in our GET and POST requests
let friendData = require('../app/data/friends');



// exporting our GET and POST routes for our API, when making a GET request to the API the friend data is sent back, when making a POST request the data will be pushed into the friend data array
module.exports = function(app) {
    app.get('/api/friends', function(req, res) {
        res.json(friendData);
    })

    app.post('/api/friends', function(req, res) {
        
        // storing the request body in a newFriend variable for easy access
        let newFriend = req.body;

        // creating empty strings to store the match's name and photo after we find it
        let friendMatchName = '';
        let friendMatchPhoto = '';

        // pulling out the user's number choices and storing in a variable for easy access
        let userScores = newFriend.scores;

        // important - creating an initial total difference that is large so that we have somewhere to store the current lowest difference in our logic, which we can then compare to a temporary difference and if the temp one is lower, than store that in total difference instead
        let totalDifference = 999;
        

        // looping through our friend data array located in friends.js
        for (i = 0; i < friendData.length; i++) {
            // creating our variable to hold the temporary difference for each friend vs the user
            let tempDiff = 0;
            // looping through the user's scores and then subtracting the user's score from each matching friend score in their respective arrays, then storing it in our temporary difference variable
            for (o = 0; o < userScores.length; o++) {
                tempDiff += Math.abs(parseInt(friendData[i].scores[o]) - parseInt(userScores[o]))
            }
            
            // comparison of our temporary difference and total difference, if the temporary difference is lower than the total difference it becomes the new total difference, until the lowest total difference is found 
            if (tempDiff < totalDifference) {
                totalDifference = tempDiff;
                friendMatchName = friendData[i].name;
                friendMatchPhoto = friendData[i].photo;
            }
        }
        
        // adding the user to the friend data
        friendData.push(newFriend);

        // sending a response object that has the match's name and match's photo
        res.json({name: friendMatchName, photo: friendMatchPhoto});
        
    })
}