Template.RingInfo.onCreated(function(){
    this.editMode = new ReactiveVar(false);
});


Template.RingInfo.events({
    'click .set-private': function() {
        Meteor.call('togglePrivate', this._id, this.isPrivate);
    },
    'click .set-public': function() {
        Meteor.call('togglePublic', this._id, this.isPrivate);
    },
    'click .fa-trash': function() {
        Meteor.call('deleteRing', this._id);
    },
    'click .fa-pencil': function(event, template) {
        template.editMode.set(!template.editMode.get());
    }
});

Template.RingInfo.helpers({
    updateRingId: function() {
        return this._id;
    },
    editMode: function() {
        return Template.instance().editMode.get();
    }
});