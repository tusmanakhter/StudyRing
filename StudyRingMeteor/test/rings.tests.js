import { Rings } from '../collections/rings/rings.js';
import { togglePrivate, togglePublic, joinRing, leaveRing, deleteRing } from '../collections/rings/methods.js';
import { PublicationCollector } from 'meteor/johanbrook:publication-collector';
import { Random } from 'meteor/random';
import { resetDatabase } from 'meteor/xolvio:cleaner'
import '../server/publish.js';


describe('Rings', function () {

    //Creating 4 dummy rings before the tests start
    before(function () {
        // Generate a 'user'
        userId = Accounts.createUser({username: 'test', email: 'test@gmail.com', password: 'test'});
        _.times(3, () => {
            Factory.create('Ring');
        });
        // Create a ring and holds the id
        RingId = Factory.create('Ring', {createdBy: userId})._id;
        
        userId2 = Accounts.createUser({username: 'test2', email: 'test@gmail.com2', password: 'test2'});
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
        const methodInvocation = { userId };
        togglePrivate._execute(methodInvocation, { id: RingId });
        assert.isTrue(Rings.findOne({_id: RingId}).isPrivate);
    });

    //Tests toggle to set ring public
    it("Should set a ring to public", function() {
        const methodInvocation = { userId };
        togglePublic._execute(methodInvocation, { id: RingId });
        assert.isFalse(Rings.findOne({_id: RingId}).isPrivate);
    });

    it("Should let a user join a ring", function() {
        const methodInvocation = { userId: userId2 };
        const collector = new PublicationCollector();

        joinRing._execute(methodInvocation, { id: RingId });

        var ring = Meteor.users.findOne({ _id: userId2 }).rings[0];
        var user = Rings.findOne({_id: RingId}).members[1];

        assert.equal(ring, RingId);
        assert.equal(user, userId2);
    });

    it("Should let a user leave a ring", function() {
        const methodInvocation = { userId: userId2 };
        const collector = new PublicationCollector();

        leaveRing._execute(methodInvocation, { id: RingId });

        var ring = Meteor.users.findOne({ _id: userId2 }).rings[0];
        var user = Rings.findOne({_id: RingId}).members[1];

        assert.isUndefined(ring);
        assert.isUndefined(user);
    });

    //Tests the deletion of a ring
    it("Should delete a ring", function() {
        const methodInvocation = { userId };
        const collector = new PublicationCollector();
        
        deleteRing._execute(methodInvocation, { id: RingId });

        assert.equal(Rings.find().count(), 3);
        assert.isUndefined(Rings.findOne({_id: RingId}));
    });

    after(function() {
        resetDatabase(null);
    });
});
