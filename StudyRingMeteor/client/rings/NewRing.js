import { Rings } from '../../collections/rings/rings.js';

Template.NewRing.helpers({
    Rings() {
        return Rings;
    }
});

Template.NewRing.events({
    'click .fa-close': function() {
        Session.set('newRing', false);
    }
});
