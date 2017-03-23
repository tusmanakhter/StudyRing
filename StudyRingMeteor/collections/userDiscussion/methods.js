import { Rings } from '../rings/rings.js';

export const commentPush = new ValidatedMethod({
  name: 'commentPush',
  validate: null,
  run() {
    var comment = this.comment
    console.log(comment);
    console.log(Session.get('activeRing'));
    Rings.update(Session.get('activeRing'), {$push: {UserDiscussion: comment}});
  },
});