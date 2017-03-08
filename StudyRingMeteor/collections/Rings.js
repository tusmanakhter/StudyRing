Rings = new Mongo.Collection('rings');

Rings.allow({
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
        }
    }
});

Meteor.methods({
    togglePrivate: function(id, currentState) {
        Rings.update(id, {
            $set: {
                isPrivate: true
            }
        });
    },
    togglePublic: function(id, currentState) {
        Rings.update(id, {
            $set: {
                isPrivate: false
            }
        });
    },
    deleteRing: function(id) {
        Rings.remove(id);
    },
    joinRing: function(id){
        var userId = Meteor.userId();
        Meteor.users.update(userId, {$push: {rings: id}});
        Rings.update(id, {$push: {members: userId}});
    },
    leaveRing: function(id){
        var userId = Meteor.userId();
        Meteor.users.update(userId, {$pull: {rings: id}});
        Rings.update(id, {$pull: {members: userId}});
    }
});

Rings.attachSchema( RingSchema );

