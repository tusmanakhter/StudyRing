import './MainForum.html';
import './SubForum.html';
import { Rings } from "../../collections/rings/rings.js";

Template.RingDiscussion.onCreated(function(){
    var self = this;
    self.autorun(function (){
        self.subscribe('rings');
        self.subscribe('allUsers');
    });
});

Template.RingDiscussion.events({
  'click .btn-primary':  function(){
    var ringId = this._id;
    Session.set('activeRing', ringId);
    var activeRing = Session.get('activeRing');
    console.log(activeRing);
  }
})

Template.RingDiscussion.helpers({
    ringComments: function(){
      var active = Session.get('activeRing');
      return Rings.findOne({_id: active});
    },
    rings: ()=> {
      return Rings.find({members: Meteor.user()._id});
    }
});
