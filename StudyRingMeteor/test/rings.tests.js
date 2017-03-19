import { Rings } from '../collections/Rings.js';
import { PublicationCollector } from 'meteor/johanbrook:publication-collector';
import { Random } from 'meteor/random';
import '../server/publish.js';


describe('Rings', function () {

//Creating 4 dummy rings before the tests start
before(function () {
    _.times(3, () => {
    Factory.create('Ring');
    });
    // Create a ring and holds the id
    RingId = Factory.create('Ring')._id;
    // Generate a 'user'
    userId = Accounts.createUser({username: 'test', email: 'test@gmail.com', password: 'test'});
    this.setUserId(userId);
});

//Checks if all the rings are properly returned
it("Should return all rings", function() {
    const collector = new PublicationCollector();

    collector.collect('rings', (collections) => {
        // `collections` is a dictionary with collection names as keys,
        // and their published documents as values in an array.
        // Here, documents from the collection 'Lists' are published.
        assert.typeOf(collections.rings, 'array');
        assert.equal(collections.rings.length, 4);
    });
});

//Tests togge to set ring private
it("Should set a ring to private", function() {
    Meteor.call('togglePrivate', RingId);
    assert.isTrue(Rings.findOne({_id: RingId}).isPrivate);
});

//Tests toggle to set ring public
it("Should set a ring to public", function() {
    Meteor.call('togglePublic', RingId);
    assert.isFalse(Rings.findOne({_id: RingId}).isPrivate);
});

// it("Should let a user join a ring", function() {
//     const methodInvocation = { userId: userId };
//     const collector = new PublicationCollector();

//     Meteor.call('joinRing', methodInvocation, RingId);

//     assert.equal(Meteor.users.findOne({_id: userId}).rings[1], RingId);
//     assert.equal(Rings.findOne({_id: RingId}).members[1], userId);
// });

// it("Should let a user leave a ring", function() {
//     const collector = new PublicationCollector();

//     Meteor.call('joinRing', methodInvocation, RingId);

//     assert.isUndefined(Meteor.users.findOne({_id: userId}).rings[1], RingId);
//     assert.isUndefined(Rings.findOne({_id: RingId}).members[1], userId);
// });

//Tests the deletion of a ring
it("Should delete a ring", function() {
    const collector = new PublicationCollector();

    Meteor.call('deleteRing', RingId);

    collector.collect('rings', (collections) => {
        assert.typeOf(collections.rings, 'array');
        assert.equal(collections.rings.length, 3);
    });
});
});
