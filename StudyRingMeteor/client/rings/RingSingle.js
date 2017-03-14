Template.RingSingle.onCreated(function(){
    var self = this;
    self.autorun(function (){
        var id = FlowRouter.getParam('id');
        self.subscribe('singleRing', id);
        self.subscribe('allUsers', id);
    });
});

Template.RingSingle.helpers({
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
    isMember: function() {
        var id = this._id;
        var result = Meteor.users.findOne({_id: Meteor.user()._id, rings: id});
        if (result)
            return true;
        else
            return false;
    }
});

Template.RingSingle.events({
  'click .join-ring': function() {
      Meteor.call('joinRing', this._id);
  },
  'click .leave-ring': function() {
      Meteor.call('leaveRing', this._id);
  }
});
