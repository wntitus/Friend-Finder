const expect = require('chai').expect;
let friendData = require('../app/data/friends');



describe("FriendData", function() {
    it("should be an object", function() {
        expect(friendData[0]).to.be.an('object');
    })
    it("should have an array property with 10 items", function() {
        expect(friendData[0]).to.have.property('scores').with.lengthOf(10);
    })
})

