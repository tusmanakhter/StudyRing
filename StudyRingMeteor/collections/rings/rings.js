import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { Factory } from 'meteor/dburles:factory';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import { joinRing } from './methods.js';
import { UserDiscussion } from "../userDiscussion/userDiscussion.js"

export const Rings = new Mongo.Collection('rings');

//Allow the insert and update function on a ring if the user is logged in
Rings.allow({
    insert: function(userId, doc){
        return !!userId;
    },
    update: function(userId, doc) {
        return doc.createdBy == userId;
    }
});

//This is the schema for tags
Tags = new SimpleSchema({
    name: {
        type: String
    }
});

//This is the schema for rings
RingSchema = new SimpleSchema({
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
    UserDiscussion: {
        type: [String],
        autoform:{
            type: "hidden"
        },
        autoValue: function () {
            //This makes sure to only set a value when it is an insert function, not an update
            if (this.isInsert && (!this.isSet || this.value.length === 0)) {
                return new Array();
            }
        },
        optional: true
    },
    admins: {
        type: [Tags],
        optional: true
    },
    isPrivate: {
        type: Boolean,
        defaultValue: false,
        optional: true,
        autoform:{
            type: "hidden"
        }
    },
    nipCode: {
      type: String,
      label: "Secret PassCode",
      optional: true,
      autoform:{
        type:"hidden"
      }
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
            //This makes sure to only set a value when it is an insert function, not an update
            if (this.isInsert && (!this.isSet || this.value.length === 0)) {
                return new Array();
            }
        },
        autoform: {
            type: "hidden"
        },
        optional: true
    },
    events: {
        type: [String],
        autoValue: function() {
            //This makes sure to only set a value when it is an insert function, not an update
            if (this.isInsert && (!this.isSet || this.value.length === 0)) {
                return new Array();
            }
        },
        autoform: {
            type: "hidden"
        },
        optional: true
    }
});

Rings.attachSchema( RingSchema );

Rings.after.insert(function() {
    if (Meteor.isServer){
       joinRing.call({ id: this._id });
    }
    if (Meteor.isClient){
        Session.set('newRing', false);
    }
});

Factory.define('Ring', Rings, {
  name: () => faker.lorem.sentence(),
  desc: () => faker.lorem.sentence(),
  tags: () => [{name: faker.lorem.sentence()}],
  createdBy: () => this.userId,
});
