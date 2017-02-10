import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

Template.register.events({
    'submit form': function(event) {
        event.preventDefault();
        var usernameVar = event.target.registerUsername.value;
        var emailVar = event.target.registerEmail.value;
        var passwordVar = event.target.registerPassword.value;
        Accounts.createUser({username: usernameVar, email: emailVar, password: passwordVar}, function (error){
           if (Meteor.user()) {
              console.log(Meteor.userId());
           } else {
              console.log("ERROR: " + error.reason);
           }
        });
    }
});

Template.login.events({
   'submit form': function(event){
      event.preventDefault();
      var myEmail = event.target.loginEmail.value;
      var myPassword = event.target.loginPassword.value;

      Meteor.loginWithPassword(myEmail, myPassword, function(error){
         if (Meteor.user()) {
            console.log(Meteor.userId());
         } else {
            console.log("ERROR: " + error.reason);
         }
      });
   }
});

Template.dashboard.events({
    'click .logout': function(event){
      event.preventDefault();
      Meteor.logout();
    }
});

Accounts.onLogin(function() {
  console.log(Meteor.userId());
});
