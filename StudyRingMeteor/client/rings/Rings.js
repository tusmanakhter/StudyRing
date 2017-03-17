Template.Rings.events({
    //This sets the variable newRing to true when an item with class new-ring is clicked
    'click .new-ring': () => {
        Session.set('newRing', true);
    }
});

Template.Rings.onCreated(function(){
    var self = this;
    self.autorun(function (){
        //This subscribes to all rings so they are visible
        self.subscribe('rings');
    });
});

Template.Rings.helpers({
    //This returns all the rings that match the search term
    rings: ()=> {
        var regexp = new RegExp(Session.get('search/keyword'), 'i');
        var selector = {$or: [
            {name: regexp},
            {tags: {$elemMatch: {name: regexp}}}
        ]};
        return Rings.find(selector);
    }
});
