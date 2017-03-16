Template.RingSingle.onCreated(function(){
    var self = this;
    self.autorun(function (){
        self.subscribe('rings');
        self.subscribe('allUsers');
    });
});

Template.RingSingle.helpers({
    userId: function() {
        return this.createdBy;
    },
    members: function() {
        var id = this._id;
        return Meteor.users.find({rings: this._id});
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
