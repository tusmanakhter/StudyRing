Template.RingSingle.onCreated(function(){
    var self = this;
    self.autorun(function (){
        //This subsribes to all rings and all users so they are visible
        self.subscribe('rings');
        self.subscribe('allUsers');
    });
});

Template.RingSingle.helpers({
    //This returns the userId of the ring it is called from
    userId: function() {
        return this.createdBy;
    },
    //This returns the members of the ring it is called from
    members: function() {
        var id = this._id;
        return Meteor.users.find({rings: this._id});
    },
    //This checks if the current user is a member of the ring this is called from
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
