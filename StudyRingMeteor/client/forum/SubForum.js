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


//to show which button has been selected - UI enhancement
/*    selectedClass: function(){
      ringId = this._id;
      var selectedButton = Session.get('activeChar');
      if(selectedButton == ringId)
        return 'selected'
    },
*/
    ringComments: function(){
      var active = Session.get('activeRing');
      return Rings.findOne({_id: active});
    },
    rings: ()=> {
      return Rings.find({});
    }
});
