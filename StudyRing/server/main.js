import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {

});
Accounts.onLogin(function() {
  console.log(Meteor.userID() + "Login successful");
});
