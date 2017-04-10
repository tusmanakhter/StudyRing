import { Rings } from '../rings/rings.js';
import { UserDiscussion } from './userDiscussion.js';

export const commentPush = new ValidatedMethod({
  name: 'commentPush',
  validate: null,
  run({ ringId , commentId }) {
    Rings.update(ringId, {$push: {UserDiscussion: commentId}});
  },
});

export const deleteComment = new ValidatedMethod({
  name: 'deleteComment',
  validate: new SimpleSchema({
    id: { type: String, regEx: SimpleSchema.RegEx.Id},
  }).validator(),
  run({ id }) {
    if (this.userId != UserDiscussion.findOne({_id: id}).createdBy) {
        throw new Meteor.Error('rings.deleteComment.notOwner',
        'Must be the owner to delete comment.');
    }

    Rings.update({UserDiscussion: id}, {$pull: {UserDiscussion: id}});
    UserDiscussion.remove(id);
  },
});
