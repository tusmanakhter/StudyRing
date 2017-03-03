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
    }
});