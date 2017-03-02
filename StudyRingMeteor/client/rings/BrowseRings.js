Template.BrowseRings.onCreated(function(){
    var self = this;
    self.autorun(function (){
        self.subscribe('rings');
        self.subscribe('allUsers');
    });
});

Template.BrowseRings.helpers({
    rings: ()=> {
        return Rings.find({});
    }
});