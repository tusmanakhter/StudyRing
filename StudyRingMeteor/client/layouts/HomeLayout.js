Template.HomeLayout.events({
    'click .register': function() {
      if (Session.get('register') === false ){
        Session.set('register', true);
      }
      else {
        Session.set('register', false);
      }
    }
});
