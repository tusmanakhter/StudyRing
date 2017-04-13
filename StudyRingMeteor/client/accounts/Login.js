Template.Login.events({
  'submit form': function(event){
     event.preventDefault();
     var myUsername = event.target.myUsername.value;
     var myPassword = event.target.myPassword.value;
     Meteor.loginWithPassword(myUsername, myPassword, function(error){
        if (Meteor.user()) {
           console.log(Meteor.userId());
        } else {
           sAlert.error(error.reason);
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