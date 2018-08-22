let friendData = require('../app/data/friends');

module.exports = function(app) {
    app.get('/api/friends', function(req, res) {
        res.json(friendData);
    })

    app.post('/api/friends', function(req, res) {
        let newFriend = req.body;

        friendData.push(newFriend);

        console.log(newFriend);
        res.json(true);
    })
}