Template.NewEvent.events({
  'click .new-event': () => {
      Session.set('newEvent', true);
  },
    'click .fa-close': function() {
        Session.set('newEvent', false);
    }
});
