import { Rings } from "../../collections/rings/rings.js";

Template.Dashboard.onCreated(function(){
    var self = this;
    self.autorun(function (){
        //Subsribe to all rings to see them
        self.subscribe('usersRings');
    });
});

Template.Dashboard.helpers({
    rings: ()=> {
        return Rings.find({});
    },
    noRings: ()=> {
        if (Rings.find({}).count() == 0)
            return true;
        else
            return false;
    }
});

Template.Dashboard.events({
    //This triggers when user types in the search box
  'keyup #search': function(event) {
    //This sets search/keyword variable to the value in the search box
    Session.set('search/keyword', event.target.value);
  }
});

Template.DashboardRings.helpers({
    numOfMembers: function() {
        return Rings.findOne({_id: this._id}).members.length;
    }
});