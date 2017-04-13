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

    //Checks if all the events are properly returned
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

    //Checks ring to event association
    it("Should associate event to ring", function() {
        const methodInvocation = { userId };

        eventPush._execute({ methodInvocation }, { ringId: RingId, eventId: EventId});

        var ring = Events.findOne({ _id: EventId }).ringId;
        var event = Rings.findOne({_id: RingId}).events[0];

        assert.equal(ring, RingId);
        assert.equal(event, EventId);
    });

    //Tests if a user can join event
    it("Should let a user join an event", function() {
        const methodInvocation = { userId: userId2 };

        joinEvent._execute(methodInvocation, { id: EventId });

        var event = Meteor.users.findOne({ _id: userId2 }).events[0];
        var user = Events.findOne({_id: EventId}).members[1];

        assert.equal(event, EventId);
        assert.equal(user, userId2);
    });

    //Tests if a user can leave event
    it("Should let a user leave an event", function() {
        const methodInvocation = { userId: userId2 };

        leaveEvent._execute(methodInvocation, { id: EventId });

        var event = Meteor.users.findOne({ _id: userId2 }).events[0];
        var user = Events.findOne({_id: EventId}).members[1];

        assert.isUndefined(event);
        assert.isUndefined(user);
    });

    //Tests the not owner error in deletion of an event
    it("Should only let the owner of an event delete it", function() {
        //Checks error condition
        assert.throws(() => {
          deleteEvent._execute({ userId2 }, { id: EventId });
        }, Meteor.Error, /rings.deleteEvent.notOwner/);

        //Confirm the event is still there.
        assert.equal(Events.findOne({_id: EventId})._id, EventId);
    });

    //Tests the deletion of an event
    it("Should delete an event", function() {
        const methodInvocation = { userId };
        
        deleteEvent._execute(methodInvocation, { id: EventId });

        assert.equal(Events.find().count(), 3);
        assert.isUndefined(Events.findOne({_id: EventId}));
    });

    after(function() {
        resetDatabase(null);
    });
});
