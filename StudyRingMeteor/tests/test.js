var expect = require('chai').expect;
var assert = chai.assert;

describe('Rings', function () {
//   it('Should return all users in a ring', function() {
//         // SETUP
//         var model = new Rings("name", "desc", ["tags"]);
//         var id = Accounts.createUser({
//             username: "someusername",
//             email: "someemail",
//             password: "somepassword",
//             profile: { name: "someusername"}
//         });

//         // EXECUTE
//         var actualValue = Payments.hasAnyPayments(); // you don't really care about the suer

//         // VERIFY
//         expect(actualValue).toBe(true);
//     });

//     it("Should not save when name is not defined", function() {
//         var model = new Tutorial(null, "", 10);
//         expect(function() { model.save(); }).toThrow();
//     });

//     it("Should not save when capacity is not defined", function() {
//         var model = new Tutorial(null, "Name", 0);
//         expect(function() { model.save(); }).toThrow();
//     });
    it("Should pass", function() {
        expect(true).to.be.true;
    });

    it('should start empty', function() {
        var arr = [];

        assert.equal(arr.length, 0);
    });
})
