import { Accounts } from 'meteor/accounts-base'

export const changeUsername = new ValidatedMethod({
  name: 'changeUsername',
  validate: new SimpleSchema({
    id: { type: String, regEx: SimpleSchema.RegEx.Id},
    newUsername: { type: String }
  }).validator(),
  run({ id, newUsername }) {
      if(Meteor.isServer){
        Accounts.setUsername(id, newUsername);
      }
  },
});
