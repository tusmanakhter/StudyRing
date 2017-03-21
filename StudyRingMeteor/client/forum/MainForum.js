import './MainForum.html';
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
