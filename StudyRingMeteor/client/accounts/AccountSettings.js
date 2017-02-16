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


//for login.html and register.html

//make sure the code is not running on server
if (Meteor.isClient) {
  Template.Dashboard.events({
    'click .logout': function(event){
        event.preventDefault();
        Meteor.logout();
    }
  });
  Template.Register.events({
    'submit form': function(event){
        event.preventDefault();
        var emailVar = event.target.registerEmail.value;
        var passwordVar = event.target.registerPassword.value;
        Accounts.createUser({
            email: emailVar,
            password: passwordVar
        });
    }
  });
  Template.Login.events({
    'submit form': function(event){
        event.preventDefault();
        var emailVar = event.target.loginEmail.value;
        var passwordVar = event.target.loginPassword.value;
        Meteor.loginWithPassword(emailVar, passwordVar);
        FlowRouter.go('dashboard');
    }
  });
}
