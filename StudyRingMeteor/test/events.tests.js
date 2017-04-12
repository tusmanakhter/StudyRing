import { Rings } from '../collections/rings/rings.js';
import { deleteRing } from '../collections/rings/methods.js';
import { Events } from '../collections/events/ringEvents.js';
import { joinEvent, leaveEvent, deleteEvent, eventPush } from '../collections/events/methods.js';
import { PublicationCollector } from 'meteor/johanbrook:publication-collector';
import { Random } from 'meteor/random';
import { resetDatabase } from 'meteor/xolvio:cleaner'
import '../server/publish.js';


describe('Events', function () {

    //Creating 4 dummy rings before the tests start
    before(function () {
        // Generate a 'user'
        userId = Accounts.createUser({username: 'test', email: 'test@gmail.com', password: 'test'});
        _.times(3, () => {
            Factory.create('Ring');
            Factory.create('Event')
        });
        // Create a ring and holds the id
        RingId = Factory.create('Ring', {createdBy: userId})._id;

        EventId = Factory.create('Event', {createdBy: userId, ringId: RingId})._id;
        
        userId2 = Accounts.createUser({username: 'test2', email: 'test@gmail.com2', password: 'test2'});
    });

    //Checks if all the rings are properly returned
    it("Should return all events", function() {
        const collector = new PublicationCollector();

        collector.collect('events', (collections) => {
            // `collections` is a dictionary with collection names as keys,
            // and their published documents as values in an array.
            // Here, documents from the collection 'Lists' are published.
            assert.typeOf(collections.events, 'array');
            assert.equal(collections.events.length, 4);
        });
    });

    it("Should let a user join an event", function() {
        const methodInvocation = { userId: userId2 };
        const collector = new PublicationCollector();

        joinEvent._execute(methodInvocation, { id: EventId });

        var event = Meteor.users.findOne({ _id: userId2 }).events[0];
        var user = Events.findOne({_id: EventId}).members[1];

        assert.equal(event, EventId);
        assert.equal(user, userId2);
    });

    it("Should let a user leave an event", function() {
        const methodInvocation = { userId: userId2 };
        const collector = new PublicationCollector();

        leaveEvent._execute(methodInvocation, { id: EventId });

        var event = Meteor.users.findOne({ _id: userId2 }).events[0];
        var user = Events.findOne({_id: EventId}).members[1];

        assert.isUndefined(event);
        assert.isUndefined(user);
    });

    //Tests the deletion of a ring
    it("Should delete an event", function() {
        const methodInvocation = { userId };
        const collector = new PublicationCollector();
        
        deleteEvent._execute(methodInvocation, { id: EventId });

        assert.equal(Events.find().count(), 3);
        assert.isUndefined(Events.findOne({_id: EventId}));
    });

    after(function() {
        resetDatabase(null);
    });
});
