import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { Factory } from 'meteor/dburles:factory';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import { joinRing } from './methods.js';

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
    createdBy:{
        type: String,
        label: "Created By",
        autoValue: function () {
            //This makes sure to only set a value when it is an insert function, not an update
            if (this.isInsert && (!this.isSet || this.value.length === 0)) {
                return this.userId
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
        }
    }
});

Meteor.methods({
    // /**
    //  * This sets a ring to private
    //  * @param id - the id of the ring to be updated
    //  */
    // togglePrivate: function(id) {
    //     Rings.update(id, {
    //         $set: {
    //             isPrivate: true
    //         }
    //     });
    // },
    // /**
    //  * This sets a ring to public
    //  * @param id - the id of the ring to be updated
    //  */
    // togglePublic: function(id) {
    //     Rings.update(id, {
    //         $set: {
    //             isPrivate: false
    //         }
    //     });
    // },
    // /**
    //  * This function deletes a ring
    //  * @param id - the id of the ring to be deleted
    //  */
    // deleteRing: function(id) {
    //     if(this.userId == Rings.findOne({_id: id}).createdBy)
    //     {
    //         Meteor.users.update({rings:{ $in: [id]}}, {$pull: {rings: id}}, {multi: true})
    //         Rings.remove(id);
    //     }
    // },
    // /**
    //  * This function lets a user join a ring
    //  * @param id - the id of the ring that is to be joined
    //  */
    // joinRing: function(id){
    //     var userId = this.userId
    //     //This adds the ring to the users rings he has joined
    //     Meteor.users.update(userId, {$push: {rings: id}});
    //     //This adds the user to the rings members
    //     Rings.update(id, {$push: {members: userId}});
    // },
    // /**
    //  * This function lets a user leave a ring
    //  * @param id - the id of the ring that is to be left
    //  */
    // leaveRing: function(id){
    //     var userId = this.userId
    //     //This removes the ring from the rings the user has joined
    //     Meteor.users.update(userId, {$pull: {rings: id}});
    //     //This removes the user from the rings memebrs
    //     Rings.update(id, {$pull: {members: userId}});
    // }
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
