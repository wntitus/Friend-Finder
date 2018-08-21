module.exports = function(app, friends) {
    app.get('/api/friends', function(req, res) {
        res.json(friends);
    })

    app.post('/api/friends', function(req, res) {
        let newFriend = req.body;

        console.log(newFriend);
        res.json(newFriend);
    })
}