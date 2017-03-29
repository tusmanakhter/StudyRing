import { Rings } from "../../collections/rings/rings.js"

Events = new Mongo.Collection('events');

Events.allow({
    insert: function(userId, doc){
        return !!userId;
    },
    update: function(userId, doc) {
        return !!userId;
    }
});

Tags = new SimpleSchema({
    name: {
        type: String
    }
});

EventsSchema = new SimpleSchema({
    name: {
        type: String,
        label: "Name"
    },
    desc: {
        type: String,
        label: "Description"
    },
    tags: {
        type: [Tags]
    },
    isPrivate: {
        type: Boolean,
        defaultValue: false,
        optional: true,
        autoform:{
            type: "hidden"
        }
    },
    eventDate:{
      type: Date,
      label: "Date",
      min: new Date()
    },

    members: {
        type: [String],
        autoValue: function() {
            if (this.isInsert && (!this.isSet || this.value.length === 0)) {
                return new Array();
            }
        },
        autoform: {
            type: "hidden"
        }
    },
     location: {
         type: String,
         label: "location",
        autoValue: function() {
            //This makes sure to only set a value when it is an insert function, not an update
            if (this.isInsert && (!this.isSet || this.value.length === 0)) {
                return new String();
            }
    }
});

Meteor.methods({
    deleteEvent: function(id) {
        Events.remove(id);
    },
    joinEvent: function(id){
        var userId = Meteor.userId();
        Meteor.users.update(userId, {$push: {rings: id}});
        Rings.update(id, {$push: {members: userId}});
    },
    leaveEvent: function(id){
        var userId = Meteor.userId();
        Meteor.users.update(userId, {$pull: {rings: id}});
        Rings.update(id, {$pull: {members: userId}});
    }
});

Events.attachSchema( EventsSchema );
