import { Rings } from '../collections/rings/rings.js';
import { UserDiscussion } from '../collections/userDiscussion/userDiscussion.js';
import { deleteComment, commentPush } from '../collections/userDiscussion/methods.js';
import { togglePrivate, togglePublic, joinRing, leaveRing, deleteRing } from '../collections/rings/methods.js';
import { PublicationCollector } from 'meteor/johanbrook:publication-collector';
import { Random } from 'meteor/random';
import { resetDatabase } from 'meteor/xolvio:cleaner'
import '../server/publish.js';


describe('Forum', function () {

    //Creating dummy rings, users and comments
    before(function () {
        // Generate a 'user'
        userId = Accounts.createUser({username: 'test', email: 'test@gmail.com', password: 'test'});
        _.times(3, () => {
            Factory.create('Ring');
            Factory.create('UserDiscussion')
        });
        // Create a ring and holds the id
        RingId = Factory.create('Ring', {createdBy: userId})._id;

        CommentId = Factory.create('UserDiscussion', {createdBy: userId, ringId: RingId})._id;

        userId2 = Accounts.createUser({username: 'test2', email: 'test@gmail.com2', password: 'test2'});


    });

    //Checks if all the comments are properly returned
    it("Should return all comments", function() {
        const collector = new PublicationCollector();

        collector.collect('userdiscussion', (collections) => {
            // `collections` is a dictionary with collection names as keys,
            // and their published documents as values in an array.
            // Here, documents from the collection 'Lists' are published.
            assert.typeOf(collections.userdiscussion, 'array');
            assert.equal(collections.userdiscussion.length, 4);
        });
    });

    it("Should associate comment to ring", function() {
        const collector = new PublicationCollector();
        const methodInvocation = { userId };

        commentPush._execute({ methodInvocation }, { ringId: RingId, commentId: CommentId});

        var ring = UserDiscussion.findOne({ _id: CommentId }).ringId;
        var comment = Rings.findOne({_id: RingId}).UserDiscussion[0];

        assert.equal(ring, RingId);
        assert.equal(comment, CommentId);
    });

    //Tests the deletion of a comment
    it("Should delete a comment", function() {
        const methodInvocation = { userId };
        const collector = new PublicationCollector();

        deleteComment._execute(methodInvocation, { id: CommentId });

        assert.equal(UserDiscussion.find().count(), 3);
        assert.isUndefined(Rings.findOne({_id: RingId}).UserDiscussion[0]);
    });

    after(function() {
        resetDatabase(null);
    });
});
