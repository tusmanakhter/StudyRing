import { Rings } from './rings.js';

export const addNip = new ValidatedMethod({
  name: 'addNip',
  validate: new SimpleSchema({
    nip: { type: String}
  }).validator(),
  run({ nip }) {

    Rings.update(id, {
      $set: {
          nipCode: nip
      }
    });
  }
});

export const togglePrivate = new ValidatedMethod({
  name: 'togglePrivate',
  validate: new SimpleSchema({
    id: { type: String, regEx: SimpleSchema.RegEx.Id},
  }).validator(),
  run({ id}) {
    if (this.userId != Rings.findOne({_id: id}).createdBy) {
        throw new Meteor.Error('rings.togglePrivate.notOwner',
        'Must be the owner to make ring private.');
    }

    Rings.update(id, {
        $set: {
            isPrivate: true
        }
    });
  },
});

export const togglePublic = new ValidatedMethod({
  name: 'togglePublic',
  validate: new SimpleSchema({
    id: { type: String, regEx: SimpleSchema.RegEx.Id},
  }).validator(),
  run({ id }) {
    if (this.userId != Rings.findOne({_id: id}).createdBy) {
        throw new Meteor.Error('rings.togglePublic.notOwner',
        'Must be the owner to make ring public.');
    }

    Rings.update(id, {
        $set: {
            isPrivate: false
        }
    });
  },
});

export const deleteRing = new ValidatedMethod({
  name: 'deleteRing',
  validate: new SimpleSchema({
    id: { type: String, regEx: SimpleSchema.RegEx.Id},
  }).validator(),
  run({ id }) {
    if (this.userId != Rings.findOne({_id: id}).createdBy) {
        throw new Meteor.Error('rings.deleteRing.notOwner',
        'Must be the owner to delete ring.');
    }

    Meteor.users.update({rings: id}, {$pull: {rings: id}}, {multi: true})
    Rings.remove(id);
  },
});

export const joinRing = new ValidatedMethod({
  name: 'joinRing',
  validate: new SimpleSchema({
    id: { type: String, regEx: SimpleSchema.RegEx.Id},
  }).validator(),
  run({ id }) {
    var userId = this.userId
    Meteor.users.update(userId, {$push: {rings: id}});
    Rings.update(id, {$push: {members: userId}});
  },
});

export const leaveRing = new ValidatedMethod({
  name: 'leaveRing',
  validate: new SimpleSchema({
    id: { type: String, regEx: SimpleSchema.RegEx.Id},
  }).validator(),
  run({ id }) {
      var userId = this.userId
      Meteor.users.update(userId, {$pull: {rings: id}});
      Rings.update(id, {$pull: {members: userId}});
  },
});
