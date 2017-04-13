import { Rings } from '../collections/rings/rings.js';
import { togglePrivate, togglePublic, joinRing, leaveRing, deleteRing, addNip } from '../collections/rings/methods.js';
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

    //Tests the not owner error in the making of a ring private
    it("Should only let the owner of a ring make it private", function() {
        //Checks error condition
        assert.throws(() => {
          togglePrivate._execute({ userId2 }, { id: RingId });
        }, Meteor.Error, /rings.togglePrivate.notOwner/);
    });

    //Tests togge to set ring private
    it("Should set a ring to private", function() {
        const methodInvocation = { userId };
        togglePrivate._execute(methodInvocation, { id: RingId });
        assert.isTrue(Rings.findOne({_id: RingId}).isPrivate);
    });

    //Tests the not owner error in the making of a ring public
    it("Should only let the owner of a ring make it public", function() {
        //Checks error condition
        assert.throws(() => {
          togglePublic._execute({ userId2 }, { id: RingId });
        }, Meteor.Error, /rings.togglePublic.notOwner/);
    });

    //Tests toggle to set ring public
    it("Should set a ring to public", function() {
        const methodInvocation = { userId };
        togglePublic._execute(methodInvocation, { id: RingId });
        assert.isFalse(Rings.findOne({_id: RingId}).isPrivate);
    });

    //Tests the not owner error adding a nip to a ring
    it("Should only let the owner of a ring add a nip", function() {
        //Checks error condition
        assert.throws(() => {
          addNip._execute({ userId2 }, { nip: "test", ringId: RingId });
        }, Meteor.Error, /rings.addNip.notOwner/);
    });

    //Tests addition of nip to ring
    it("Should add nip to a ring", function() {
        const methodInvocation = { userId };
        addNip._execute(methodInvocation, { nip: "test", ringId: RingId });
        assert.equal(Rings.findOne({_id: RingId}).nipCode, "test");
    });

    //Tests if user can join a ring
    it("Should let a user join a ring", function() {
        const methodInvocation = { userId: userId2 };

        joinRing._execute(methodInvocation, { id: RingId });

        var ring = Meteor.users.findOne({ _id: userId2 }).rings[0];
        var user = Rings.findOne({_id: RingId}).members[1];

        assert.equal(ring, RingId);
        assert.equal(user, userId2);
    });

    //Tests if user can leave ring
    it("Should let a user leave a ring", function() {
        const methodInvocation = { userId: userId2 };

        leaveRing._execute(methodInvocation, { id: RingId });

        var ring = Meteor.users.findOne({ _id: userId2 }).rings[0];
        var user = Rings.findOne({_id: RingId}).members[1];

        assert.isUndefined(ring);
        assert.isUndefined(user);
    });

    //Tests the not owner error in the deletion of a ring
    it("Should only let the owner of a ring delete it", function() {
        //Checks error condition
        assert.throws(() => {
          deleteRing._execute({ userId2 }, { id: RingId });
        }, Meteor.Error, /rings.deleteRing.notOwner/);
    });

    //Tests the deletion of a ring
    it("Should delete a ring", function() {
        const methodInvocation = { userId };
        
        deleteRing._execute(methodInvocation, { id: RingId });

        assert.equal(Rings.find().count(), 3);
        assert.isUndefined(Rings.findOne({_id: RingId}));
    });

    after(function() {
        resetDatabase(null);
    });
});
