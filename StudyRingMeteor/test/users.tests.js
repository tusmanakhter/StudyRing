import { changeUsername } from '../collections/users/methods.js';
import { PublicationCollector } from 'meteor/johanbrook:publication-collector';
import { Random } from 'meteor/random';
import '../server/publish.js';


describe('Users', function () {

    //Creating 4 dummy rings before the tests start
    before(function () {
        // Generate a 'user'
        userId3 = Accounts.createUser({username: 'test3', email: 'test3@gmail.com', password: 'test3'});
        
        userId4 = Accounts.createUser({username: 'test4', email: 'test4@gmail.com', password: 'test4'});
    });

    //Checks if all the rings are properly returned
    it("Should allow user to change username", function() {
        id = userId3;
        newUsername = 'new name';
        changeUsername._execute({userId3}, { id, newUsername });
        assert.equal(Meteor.users.findOne(id).username, 'new name');
    });
});
