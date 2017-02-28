Template.BrowseRings.onCreated(function(){
    var self = this;
    self.autorun(function (){
        self.subscribe('rings');
    });
});

Template.BrowseRings.helpers({
    rings: ()=> {
        return Rings.find({});
    }
});