const expect = require('chai').expect;
let friendData = require('../app/data/friends');
function getMatch(friendObj) {
    let totalDifference = 0;
    let diffArray = [];
    for (i = 0; i < friendData.length; i++) {
        let currentFriend = friendData[i];
        for (j = 0; j < currentFriend.scores.length; j++) {
            for (o = 0; o < friendObj.scores.length; o++) {
                totalDifference += Math.abs(parseInt(currentFriend.scores[j]) - parseInt(friendObj.scores[o]));
                if (o === 9) {
                    diffArray.push(totalDifference);
                }
            }
        }
    }
    let matchIndex = diffArray.indexOf(Math.min(diffArray));
    let match = friendData[matchIndex];
    return match;
}
let testObj = {
    'name' : 'testman',
    'photo' : 'test.com',
    'scores' : [
        '2',
        '4',
        '5',
        '1',
        '3',
        '2',
        '5',
        '2',
        '1',
        '2'
    ]
}



describe("FriendData", function() {
    it("should be an object", function() {
        expect(testObj).to.be.an('object');
    })
    it("should have an array property with 10 items", function() {
        expect(testObj).to.have.property('scores').with.lengthOf(10);
    })
    it("should have an array that we can parse an int out of", function() {
        expect(parseInt(testObj.scores[0])).to.be.a('number');
    })
})

describe("getMatch", function() {
    it("should return an object", function() {
        expect(getMatch(testObj)).to.be.an('object');
    })
})

