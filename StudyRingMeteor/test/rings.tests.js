// var expect = require('chai').expect;
// var assert = chai.assert;

if (Meteor.isServer) {
  describe('Rings', function () {
      //This should always pass
      it("Should pass", function() {
          expect(true).to.be.true;
      });

      //This should always pass
      it('Should start empty', function() {
          var arr = [];
          assert.equal(arr.length, 0);
      });
  })
}