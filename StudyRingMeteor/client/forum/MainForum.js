import './MainForum.html';
Meteor.subscribe('UserDiscussion');

Template.MainForum.helpers({
    comments: function () {
    return UserDiscussion.find();
  }
});

Template.myCommentBox.events({
      'submit form': function(event){
      event.preventDefault();
      var thisComment = event.target.mycomment.value;
    }
});
