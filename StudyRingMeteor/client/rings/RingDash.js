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
      var active = Session.get('activeRing');
      return UserDiscussion.find({ringId: active});
    },
    userId: function () {
        var userId = this.createdBy;
        return Meteor.users.findOne({_id: userId});
    },
    usernameComment: function(){
      var userId = this.createdBy;
      return Meteor.users.findOne({_id: userId}).username;
    },
    createdAgo: function(){
      console.log(this.createdAt);
      return moment(this.createdAt).fromNow();
    },
    createdAt: function(){
      console.log(this.createdAt);
      return moment(this.createdAt).format('DD/MM/YYYY');
    }
});
