Template.HomeLayout.events({
    'click .register': function() {
      if (Session.get('register') === false ){
        Session.set('register', true);
      }
      else {
        Session.set('register', false);
      }
    },
    'click .forgotpassword': function() {
      if (Session.get('forgotpassword') === false){
        Session.set('forgotpassword', true);
      }
      else {
        Session.set('forgotpassword', false);
      }
    }
});
