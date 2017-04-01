import { Rings } from "../../collections/rings/rings.js";

Template.BrowseRings.onCreated(function(){
    var self = this;
    self.autorun(function (){
        self.subscribe('rings');                                                //Subsribe to all rings to see them
    });
});

Template.BrowseRings.helpers({

    rings: ()=> {                                                               /* This function returns only the rings that match the search bar
                                                                                 * if the search bar is empty, it returns all rings*/
        var regexp = new RegExp(Session.get('search/keyword'), 'i');            //The string can match the name or a tag of the ring
        var selector = {$or: [
            {name: regexp},
            {tags: {$elemMatch: {name: regexp}}}
        ]};
        return Rings.find(selector);
    }
});

Template.BrowseRings.events({
  'keyup #search': function(event) {                                            //This triggers when user types in the search box
    Session.set('search/keyword', event.target.value);                          //This sets search/keyword variable to the value in the search box
  }
});
