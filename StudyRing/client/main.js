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

Template.navBarLoggedIn.events({
    'click .btn': function(event){
      event.preventDefault();
      Meteor.logout();
    }
});

Template.accountSettings.events({
    'click .changePassword': function(event){
      event.preventDefault();
      var oldPass = event.target.oldPassword.value;
      var newPass = event.target.newPassword.value;
      var newPass2 = event.target.newPassword2.value;
      if (newPass.isEqual(newPass2)){
        Accounts.changePassword(oldPass, newPass);
      }
    }
});
/*Accounts.onLogin(function() {
  console.log(Meteor.userId());
});*/
