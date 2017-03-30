import { Rings } from '../rings/rings.js';

export const commentPush = new ValidatedMethod({
  name: 'commentPush',
  validate: null,
  run({ id , doc }) {
    Rings.update(id, {$push: {UserDiscussion: doc}});
  },
});