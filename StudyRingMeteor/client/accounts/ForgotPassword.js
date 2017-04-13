
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
            sAlert.error(err.reason);
        else {
            sAlert.success("Email sent.");
        }
    });
  },

  'submit #new-password' : function(e, t) {
    e.preventDefault();
    var pw = t.find('#new-password').value;
    
    Accounts.resetPassword(Session.get('resetPassword'), pw, function(err){
        if (err)
            sAlert.error(err.reason);
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
