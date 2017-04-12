import { Rings } from "../../collections/rings/rings.js";
import { Events } from "../../collections/events/ringEvents.js";

Template.Dashboard.onCreated(function(){
    var self = this;
    self.autorun(function (){
        self.subscribe('usersRings');
        self.subscribe('events');
    });
});

Template.Dashboard.helpers({
    rings: ()=> {
        return Rings.find({});
    },
    createdBy: function () {
        var id = Rings.findOne({_id: this._id}).createdBy;
        return Meteor.users.findOne({_id: id}).username;
    },
    noRings: ()=> {
        if (Rings.find({}).count() == 0)
            return true;
        else
            return false;
    },
    numOfMembers: function() {
        return Rings.findOne({_id: this._id}).members.length;
    },
    events: ()=> {
      var userId = Meteor.userId();
        return Events.find({members: userId});
    },
    createdBy: function () {
        var id = Events.findOne({_id: this._id}).createdBy;
        return Meteor.users.findOne({_id: id}).username;
    },
    eventDate: function () {
        return Events.findOne({_id: this._id}).eventDate;
    },
});

Template.Dashboard.events({
    //This triggers when user types in the search box
  'keyup #search': function(event) {
    //This sets search/keyword variable to the value in the search box
    Session.set('search/keyword', event.target.value);
  }
});
