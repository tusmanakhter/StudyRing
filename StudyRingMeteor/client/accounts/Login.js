Template.Login.events({
  'submit form': function(event){
     event.preventDefault();
     var myUsername = event.target.myUsername.value;
     var myPassword = event.target.myPassword.value;
     Meteor.loginWithPassword(myUsername, myPassword, function(error){
        if (Meteor.user()) {
           console.log(Meteor.userId());
        } else {
           console.log("ERROR: " + error.reason);
        }
     });
  },
  'click .register': function() {
    event.preventDefault();
    Session.set('register', true);
  },
  'click .forgotpassword': function() {
    event.preventDefault();
    Session.set('forgotpassword', true);
  }
});

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
    },
    'click .login': function() {
     event.preventDefault();
     Session.set('register', false);
    }
});

Template.ForgotPassword.helpers({
  resetPassword : function(t) {
    if (Accounts._resetPasswordToken) {
      Session.set('resetPassword', Accounts._resetPasswordToken);
    } 
    return Session.get('resetPassword');
  }
  
});

Template.ForgotPassword.events({
  'submit form' : function(e, t) {
      e.preventDefault()
      var email = t.find('#recovery-email').value;

      Accounts.forgotPassword({email: email}, function(err){
        if (err)
            console.log("error");
        else {
            console.log("email sent");
        }
    });
  },

  'submit #new-password' : function(e, t) {
    e.preventDefault();
    var pw = t.find('#new-password').value;
    
    Accounts.resetPassword(Session.get('resetPassword'), pw, function(err){
        if (err)
          console.log("error");
        else {
          Session.set('resetPassword', null);
        }
      });
    },
    'click .login': function() {
      event.preventDefault();
      Session.set('forgotpassword', false);
    }
});