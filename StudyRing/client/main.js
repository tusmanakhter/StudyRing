import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

Template.navBar.events({
  'submit form': function(event){
     event.preventDefault();
     var myEmail = event.target.myEmail.value;
     var myPassword = event.target.myPassword.value;
     Meteor.loginWithPassword(myEmail, myPassword, function(error){
        if (Meteor.user()) {
           console.log(Meteor.userId());
        } else {
           console.log("ERROR: " + error.reason);
        }
     });
  }
});

Template.navBarLoggedIn.events({
    'click .btn': function(event){
      event.preventDefault();
      Meteor.logout();
    }
});

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

Template.accountSettings.events({
    'click .changePassword': function(event){
        event.preventDefault();
       var oldPass = event.target.oldPassword.value;
        var newPass = event.target.newPassword.value;
        var newPass2 = event.target.newPassword2.value;
        Accounts.changePassword(oldPass, newPass, function(error){
          if (error) {
            console.log("ERROR" + error.reason);
          }
          else{
            console.log("Password Changed");
          }
        });
    },
    'click .changeUsername': function(event){
      event.preventDefault();
      var newUsername = event.target.changeUsername.value;
      Accounts.changeUsername(Meteor.userID(), newUsername);
    }
});

Accounts.onLogin(function() {
  console.log("Successful Login");
});
