import { Rings } from "../../collections/rings/rings.js";
import { togglePrivate, togglePublic, deleteRing } from "../../collections/rings/methods.js";

Template.RingInfo.onCreated(function(){
    this.editMode = new ReactiveVar(false);
    var self = this;
    self.autorun(function (){
        self.subscribe('rings');
        self.subscribe('allUsers');
    });
});


Template.RingInfo.events({
    'click .set-private': function() {
        togglePrivate.call({ id: this._id });
    },
    'click .set-public': function() {
        togglePublic.call({ id: this._id });
    },
    'click .fa-trash': function() {
        deleteRing.call({ id: this._id });
    },
    'click .fa-pencil': function(event, template) {
        template.editMode.set(!template.editMode.get());
    }
});

Template.RingInfo.helpers({
    Rings() {
        return Rings;
    },
    //This returns the id of the selected ring
    updateRingId: function() {
        return this._id;
    },
    //This checks if the ring is in edit mode
    editMode: function() {
        return Template.instance().editMode.get();
    },
    //This returns the id of the user who created the ring
    userId: function () {
        return this.createdBy;
    },
    //This returrns the user information of the user who created the ring
    user: function() {
        var id = Rings.findOne({_id: this._id}).createdBy;
        return Meteor.users.findOne({_id: id});
    },
    //This checks if the current user is a member of the ring
    isMember: function() {
        var id = this._id;
        var result = Meteor.users.findOne({_id: Meteor.user()._id, rings: id});
        if (result)
            return true;
        else
            return false;
    },
});
