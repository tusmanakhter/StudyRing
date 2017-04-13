import { Events } from "../../collections/events/ringEvents.js";
import { joinEvent, leaveEvent, deleteEvent } from "../../collections/events/methods.js";

Template.Events.onCreated(function(){
    var self = this;
    self.autorun(function (){
        self.subscribe('events');
    });
})

Template.Events.helpers({
    Events() {
        return Events;
    },
    events: ()=> {
      var id = FlowRouter.getParam('id');
      return Events.find({ringId: id});
    }
})

Template.EventsInfo.onCreated(function(){
  this.editMode = new ReactiveVar(false);
  var self = this;
  self.autorun(function (){
      self.subscribe('events');
  });
});

Template.EventsInfo.events({
    'click .join-event': function() {
        joinEvent.call({ id: this._id });
    },
    'click .leave-event': function() {
        leaveEvent.call({ id: this._id });
    },
    'click .delete-event': function() {
        deleteEvent.call({ id: this._id });
    },
    'click .fa-pencil': function(event, template) {
        template.editMode.set(!template.editMode.get());
    }
});

Template.EventsInfo.helpers({
    isMember: function() {
        var id = this._id;
        var result = Meteor.users.findOne({_id: Meteor.user()._id, events: id});
        if (result)
            return true;
        else
            return false;
    },
    userId: function () {
        return this.createdBy;
    },
    isOwner: function(s2){
      return (Meteor.userId()===s2);
    },
    editMode: function() {
        return Template.instance().editMode.get();
    },
    updateEventId: function() {
        return this._id;
    },
})
