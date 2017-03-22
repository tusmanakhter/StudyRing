Template.Register.events({
  'submit form': function(event) {
      event.preventDefault();
      var usernameVar = event.target.registerUsername.value;
      var emailVar = event.target.registerEmail.value;
      var passwordVar = event.target.registerPassword.value;
      Accounts.createUser({username: usernameVar, email: emailVar, password: passwordVar}, function (error){
         if (Meteor.user()) {
            AvatarManager.setUserAvatar(Meteor.user()); //Sets profile avatar to the default avatar
            console.log(Meteor.userId());
         } else {
            console.log("ERROR: " + error.reason);
         }
      });
  }
});
