Meteor.publish('rings', function(){
    return Rings.find({});
});

Meteor.publish('singleRing', function(id){
    check(id, String);
    return Rings.find({_id: id});
});

Meteor.publish('allUsers', function() {
    return Meteor.users.find({});
});