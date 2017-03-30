import './MainForum.html';
import { Rings } from "../../collections/rings/rings.js"
//import { UserDiscussion } from "../../collections/UserDiscussion.js";
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
      return UserDiscussion.find({});
    }

});

Template.MainForum.events({
  'click .toggle-menu1': function() {
      console.log('click');
      Meteor.call('updateComment', this._id, inCommentSection);
    },

  'click .toggle-menu2': function() {
    console.log('click');
    Meteor.call('deleteComment', this._id);
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
        doc.ringId = "none";   
      }

      return doc;
    }
  },
//   after: {
//       insert: function(doc){
//         var id = Session.get('activeRing')
//         commentPush.call({id, doc});
//       }
//   }
}

AutoForm.hooks({
  insertComment: hooksObject
});