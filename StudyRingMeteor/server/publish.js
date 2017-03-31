import { Meteor } from 'meteor/meteor';
import { Rings } from "../collections/rings/rings.js"

/**
 * This function returns all rings to the client
 */
Meteor.publish('rings', function(){
    return Rings.find({});
});

/**
 * This function returns all rings to the client
 */
Meteor.publish('usersRings', function(){
    if(this.userId)
        var rings = Meteor.users.findOne(this.userId).rings;
    else
        var rings = null;
        
    if (rings != null)
    {
        return Rings.find({ _id: { $in: rings}});
    }
    else
        return null;
});

/**
 * This functions returns a single ring to the client
 * @param id - id of the ring we need
 */
Meteor.publish('singleRing', function(id){
    check(id, String);
    return Rings.find({_id: id});
});

/**
 * This function returns all users to the client
 */
Meteor.publish('allUsers', function() {
    return Meteor.users.find({});
});

/**
  This function will return all comment discussion added by all users
*/
Meteor.publish('userdiscussion', function() {
  return UserDiscussion.find({});
});

Meteor.publish('events', function(){
    return Events.find({});
});