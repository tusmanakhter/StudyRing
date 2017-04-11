import { Events } from './ringEvents.js';
import { Rings } from '../rings/rings.js';

export const eventPush = new ValidatedMethod({
  name: 'eventPush',
  validate: null,
  run({ ringId , eventId }) {
    Rings.update(ringId, {$push: {events: eventId}});
  }
});

export const deleteEvent = new ValidatedMethod({
  name: 'deleteEvent',
  validate: new SimpleSchema({
    id: { type: String, regEx: SimpleSchema.RegEx.Id},
  }).validator(),
  run({ id }) {
    if (this.userId != Events.findOne({_id: id}).createdBy) {
        throw new Meteor.Error('rings.deleteEvent.notOwner',
        'Must be the owner to delete event.');
    }

    Rings.update({event: id}, {$pull: {event: id}});
    Events.remove(id);
  },
});

export const joinEvent = new ValidatedMethod({
  name: 'joinEvent',
  validate: new SimpleSchema({
    id: { type: String, regEx: SimpleSchema.RegEx.Id},
  }).validator(),
  run({ id }) {
    var userId = this.userId
    Meteor.users.update(userId, {$push: {events: id}});
    Events.update(id, {$push: {members: userId}});
  },
});

export const leaveEvent = new ValidatedMethod({
  name: 'leaveEvent',
  validate: new SimpleSchema({
    id: { type: String, regEx: SimpleSchema.RegEx.Id},
  }).validator(),
  run({ id }) {
      var userId = this.userId
      Meteor.users.update(userId, {$pull: {events: id}});
      Events.update(id, {$pull: {members: userId}});
  },
});