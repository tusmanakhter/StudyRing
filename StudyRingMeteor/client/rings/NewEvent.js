import { Events } from "../../collections/events/ringEvents.js";
import { eventPush } from "../../collections/events/methods.js";

Template.NewEvent.events({
    'click .new-event': () => {
        Session.set('newEvent', true);
    },
    'click .fa-close': function() {
        Session.set('newEvent', false);
    }
});


Template.NewEvent.helpers({
    Events() {
        return Events;
    }
});

var hooksObject = {  
  before: {
    insert: function(doc) {
      //Altering the doc before submission to include the ring
      doc.ringId = FlowRouter.getParam('id');

      return doc;
    }
  },
  after: {
      insert: function(error, result){
        var ringId = FlowRouter.getParam('id');
        var eventId = result;
        eventPush.call({ringId, eventId});
      }
  }
}

AutoForm.hooks({
  newEventForm: hooksObject
});