import { Rings } from "../../collections/rings/rings.js";
import { UserDiscussion } from "../../collections/userDiscussion/userDiscussion.js";

Template.RingDash.onCreated(function(){
    this.editMode = new ReactiveVar(false);
    var self = this;
    self.autorun(function (){
        var id = FlowRouter.getParam('id');
        self.subscribe('singleRing', id);
        self.subscribe('allUsers');
        self.subscribe('userdiscussion');
    });
});

Template.RingDash.helpers({
    ring: ()=> {
        var id = FlowRouter.getParam('id');
        return Rings.findOne({_id: id});
    },
    createdByUser: function() {
        var id = FlowRouter.getParam('id');
        var userid = Rings.findOne({_id: id}).createdBy;
        return Meteor.users.findOne({_id: userid});
    },
    members: () => {
        var id = FlowRouter.getParam('id');
        return Meteor.users.find({rings: id});
    },
    comments: ()=> {
      var ringId = FlowRouter.getParam('id');
      return UserDiscussion.find({ringId});
    },
    //User for avatar diplay
    userId: function () {
        var userId = this.createdBy;
        return Meteor.users.findOne({_id: userId});
    },
    //Name of the user who created the comment
    usernameComment: function(){
      var userId = this.createdBy;
      return Meteor.users.findOne({_id: userId}).username;
    },
    //The date of the comment creation
    createdAgo: function(){
      return moment(this.createdAt).fromNow();
    },
    createdAt: function(){
      return moment(this.createdAt).format('DD/MM/YYYY');
    }
});
