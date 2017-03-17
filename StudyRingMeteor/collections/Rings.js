Rings = new Mongo.Collection('rings');

//Allow the insert and update function on a ring if the user is logged in
Rings.allow({
    insert: function(userId, doc){
        return !!userId;
    },
    update: function(userId, doc) {
        return !!userId;
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
    /**
     * This sets a ring to private
     * @param id - the id of the ring to be updated
     * @param currentState - the state of the ring (private or public) (I dont think we need this) **Refactor**
     */
    togglePrivate: function(id, currentState) {
        Rings.update(id, {
            $set: {
                isPrivate: true
            }
        });
    },
    /**
     * This sets a ring to public
     * @param id - the id of the ring to be updated
     * @param currentState - the state of the ring (private or public) (I dont think we need this) **Refactor**
     */
    togglePublic: function(id, currentState) {
        Rings.update(id, {
            $set: {
                isPrivate: false
            }
        });
    },
    /**
     * This function deletes a ring
     * @param id - the id of the ring to be deleted
     */
    deleteRing: function(id) {
        Rings.remove(id);
    },
    /**
     * This function lets a user join a ring
     * @param id - the id of the ring that is to be joined
     */
    joinRing: function(id){
        var userId = Meteor.userId();
        //This adds the ring to the users rings he has joined
        Meteor.users.update(userId, {$push: {rings: id}});
        //This adds the user to the rings members
        Rings.update(id, {$push: {members: userId}});
    },
    /**
     * This function lets a user leave a ring
     * @param id - the id of the ring that is to be left
     */
    leaveRing: function(id){
        var userId = Meteor.userId();
        //This removes the ring from the rings the user has joined
        Meteor.users.update(userId, {$pull: {rings: id}});
        //This removes the user from the rings memebrs
        Rings.update(id, {$pull: {members: userId}});
    }
});

Rings.attachSchema( RingSchema );

