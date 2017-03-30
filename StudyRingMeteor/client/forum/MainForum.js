import './MainForum.html';
import { Rings } from "../../collections/rings/rings.js"
import { commentPush, deleteComment } from "../../collections/userDiscussion/methods.js";
//Meteor.subscribe('userdiscussion');

Template.MainForum.onCreated(function(){
    var self = this;
    self.autorun(function(){
      self.subscribe('userdiscussion');
    });
});

Template.MainForum.helpers({

    //This returns the id of the selected comment
    updateCommentId: function() {
        return this._id;
    },
    //This checks if the comment is in edit mode
    editComment: function() {
        return Template.instance().editMode.get();
    },
    //This returns the id of the user who created the comment
    userId: function () {
        return this.createdBy;
    },
    comments: ()=> {
      var active = Session.get('activeRing');
      return UserDiscussion.find({ringId: active});
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