import { Accounts } from 'meteor/accounts-base'
import { changeUsername } from "../../collections/users/methods.js";

Template.AccountSettings.onCreated(function(){
    var self = this;
    self.autorun(function (){
        self.subscribe('profilePictures');
    });
});

Template.ChangePassword.events({
    'submit form': function(event){
        event.preventDefault();
        var oldPass = event.target.oldPassword.value;
        var newPass = event.target.newPassword.value;
        var newPass2 = event.target.newPassword2.value;
        if(newPass==newPass2){
            Accounts.changePassword(oldPass, newPass, function(error){
              if (error) {
                sAlert.error(error.reason);
              }
              else{
                sAlert.success("Password Changed");
              }
            });
        }
        else{
            sAlert.error("New passwords do not match");
        }
    }
});

Template.ChangeUsername.events({
    'submit form': function(event){
      event.preventDefault();
      var newUsername = event.target.newUsername.value;
      changeUsername.call({ id: Meteor.userId(), newUsername }, function(error,result){
          if(error)
            sAlert.error(error.reason);
          else
            sAlert.success("Username changed.");
      });
    }
});

Template.AccountSettings.events({
    'click .fa-close': function() {
        Session.set('changeSettings', false);
    }
});

Template.AccountSettings.events({
    'click .change-settings': () => {
        Session.set('changeSettings', true);
    }
});
