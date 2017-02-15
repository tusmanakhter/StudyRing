Template.AccountSettings.events({
    'click .changePassword': function(event){
        event.preventDefault();
        console.log(event);
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

Template.AccountSettings.helpers({
  user: function() {
    return Meteor.user();
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
})