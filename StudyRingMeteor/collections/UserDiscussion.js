import { Rings } from './rings/rings.js';

UserDiscussion = new Mongo.Collection('userdiscussion');

//checks if the user is still logged in
UserDiscussion.allow({
    insert: function(userId, doc){
        return !!userId;
    },
    update: function(userId, doc) {
        return !!userId;
    }
});

//schema for the userdiscussion
  UserDiscussionSchema = new SimpleSchema({

   comment: {
      type: String,
      min: 5,
      max: 1000,
      autoform: {
         rows: 5
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
});

Meteor.methods({
  deleteComment: function(id) {
      UserDiscussion.remove(id);
  },

  editComment: function(id, currentState){
      UserDiscussion.update(id,{
        $set:{
          inCommentSection: !currentState
        }
      });
  }
})

UserDiscussion.after.insert(function() {
    if (Meteor.isServer){
       commentPush.call({ id: this._id });
    }
    if (Meteor.isClient){
        Session.set('newRing', false);
    }
});

 commentPush = new ValidatedMethod({
  name: 'commentPush',
  validate: new SimpleSchema({
    id: { type: String, regEx: SimpleSchema.RegEx.Id},
  }).validator(),
  run({ id }) {
    var comment = this.comment
//   Meteor.users.update(userId, {$push: {rings: id}}); Later associate each comment with a user
    Rings.update(id, {$push: {UserDiscussion: comment}});
  },
});

UserDiscussion.attachSchema(UserDiscussionSchema);
