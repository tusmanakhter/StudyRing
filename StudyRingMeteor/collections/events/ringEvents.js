import { Rings } from "../../collections/rings/rings.js"
import { joinEvent } from './methods.js';

export const Events = new Mongo.Collection('events');

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
    createdBy:{
        type: String,
        label: "Created By",
        autoValue: function () {
            //This makes sure to only set a value when it is an insert function, not an update
            if (this.isInsert && (!this.isSet || this.value.length === 0)) {
                return this.userId;
            }
        },
        autoform: {
            type: "hidden"
        }
    },
    createdAt: {
        type: Date,
        label: "Created At",
        autoValue: function() {
            //This makes sure to only set a value when it is an insert function, not an update
            if (this.isInsert && (!this.isSet || this.value.length === 0)) {
                return new Date()
            }
        },
        autoform: {
            type: "hidden"
        }
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
        },
        optional: true
    },
    location: {
        type: String,
        label: "Location"
    },
    memberLimit: {
        type: Number,
        label: "Member Limit",
        optional: true
    },
    ringId: {
        type: String,
        autoform: {
            type: "hidden"
        }
    }
});

Events.attachSchema( EventsSchema );

Events.after.insert(function() {
    if (Meteor.isServer){
       joinEvent.call({ id: this._id });
    }
    if (Meteor.isClient){
        Session.set('newEvent', false);
    }
});

Factory.define('Event', Events, {
  name: () => faker.lorem.sentence(),
  desc: () => faker.lorem.sentence(),
  tags: () => [{name: faker.lorem.sentence()}],
  location: () => faker.lorem.sentence(),
  createdBy: () => this.userId,
  eventDate: () => new Date(),
  ringId: () => faker.lorem.sentence()
});
