Template.AccountSettings.onCreated(function(){
    var self = this;
    self.autorun(function (){
        self.subscribe('profilePictures');
    });
});

Template.changePassword.events({
    'submit form': function(event){
        event.preventDefault();
        console.log(event);
        var oldPass = event.target.oldPassword.value;
        var newPass = event.target.newPassword.value;
        var newPass2 = event.target.newPassword2.value;
        Accounts.changePassword(oldPass, newPass, function(error){
          if (error) {
            alert("ERROR: " + error.reason);
            console.log("ERROR " + error.reason);
          }
          else if (newPass != newPass2) {
            alert( "ERROR: Please retype the same password");
            console.log("ERROR: this guy can t type properly");
          }
          else{
            alert("The password was changed with great success")
            console.log("Password Changed");
          }
        });
    }
});

Template.changeUsername.events({
    'submit form': function(event){
      event.preventDefault();
      var newUsername = event.target.changeUsername.value;
      var userId = Meteor.userID();
      Accounts.setUsername(userId, newUsername);
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
