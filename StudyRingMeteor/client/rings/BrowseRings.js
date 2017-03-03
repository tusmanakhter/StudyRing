Template.BrowseRings.onCreated(function(){
    var self = this;
    self.autorun(function (){
        self.subscribe('rings');
    });
});

Template.BrowseRings.helpers({
    rings: ()=> {
        var regexp = new RegExp(Session.get('search/keyword'), 'i');
        var selector = {$or: [
            {name: regexp},
            {tags: {$elemMatch: {name: regexp}}}
        ]};
        return Rings.find(selector);
    }
});

Template.BrowseRings.events({
  'keyup #search': function(event) {
    Session.set('search/keyword', event.target.value);
  }
});