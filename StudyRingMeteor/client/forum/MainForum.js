import './MainForum.html';
import { Rings } from "../../collections/rings/rings.js"
import { commentPush, deleteComment } from "../../collections/userDiscussion/methods.js";
import { UserDiscussion } from "../../collections/userDiscussion/userDiscussion.js";
//Meteor.subscribe('userdiscussion');


Template.MainForum.onCreated(function(){
    var self = this;
    self.autorun(function(){
      self.subscribe('userdiscussion');
      self.subscribe('allUsers');
    });
});

Template.MyAvatarComment.onCreated(function(){
    var self = this;
    self.autorun(function(){
      self.subscribe('allUsers');
    });
});

Template.MainForum.helpers({
    UserDiscussion() {
        return UserDiscussion;
    },
    updateCommentId: function() {                                               //This returns the id of the selected comment
        return this._id;
    },
    editComment: function() {                                                   //This checks if the comment is in edit mode
        return Template.instance().editMode.get();
    },
    userId: function () {                                                       //This returns the id of the user who created the comment
        return this.createdBy;
    },
    comments: ()=> {
      var active = Session.get('activeRing');
      return UserDiscussion.find({ringId: active});
    },
});

Template.MyAvatarComment.helpers({
    userId: function () {
        var userId = this.createdBy;
        return Meteor.users.findOne({_id: userId});
    },
    username: function(){
      var userId = this.createdBy;
      return Meteor.users.findOne({_id: userId}).username;
    }
});

Template.MyComment.helpers({
  createdAt: function(){
    console.log(this.createdAt);
    return moment(this.createdAt).format('DD/MM/YYYY');
  },
  createdAgo: function(){
    console.log(this.createdAt);
    return moment(this.createdAt).fromNow();
  },
  userDelete: function(){
    var userId = this.createdBy;
    console.log(this.createdBy);
    return (Meteor.userId() === userId);
  }
});

Template.MainForum.events({
  'click .toggle-menu1': function() {
      console.log('click');
      Meteor.call('updateComment', this._id, inCommentSection);
    },

  'click .toggle-menu2': function() {
    console.log('click');
    deleteComment.call({ id: this._id });
  },
});

var hooksObject = {
  before: {
    insert: function(doc) {
      //Altering the doc before submission to include the ring
      if(Session.get('activeRing')){
        doc.ringId = Session.get('activeRing');
      }
      else{
        throw new Meteor.Error('activeRingError', 'Please select a ring');
      }

      return doc;
    }
  },
  after: {
      insert: function(error, result){
        var ringId = Session.get('activeRing');
        var commentId = result;
        commentPush.call({ringId, commentId});
      }
  }
}

AutoForm.hooks({
  insertComment: hooksObject
});
