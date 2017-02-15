var require = meteorInstall({"lib":{"routes.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                            //
// lib/routes.js                                                                                              //
//                                                                                                            //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                              //
if (Meteor.isClient) {                                                                                        // 1
    Accounts.onLogin(function () {                                                                            // 2
        FlowRouter.go('dashboard');                                                                           // 3
    });                                                                                                       // 4
    Accounts.onLogout(function () {                                                                           // 6
        FlowRouter.go('home');                                                                                // 7
    });                                                                                                       // 8
}                                                                                                             // 9
                                                                                                              //
FlowRouter.triggers.enter([function (context, redirect) {                                                     // 11
    if (!Meteor.userId()) {                                                                                   // 12
        FlowRouter.go('home');                                                                                // 13
    }                                                                                                         // 14
}]);                                                                                                          // 15
FlowRouter.route('/', {                                                                                       // 17
    name: 'home',                                                                                             // 18
    action: function () {                                                                                     // 19
        if (Meteor.userId()) {                                                                                // 20
            FlowRouter.go('dashboard');                                                                       // 21
        }                                                                                                     // 22
                                                                                                              //
        BlazeLayout.render('HomeLayout');                                                                     // 23
    }                                                                                                         // 24
});                                                                                                           // 17
FlowRouter.route('/dashboard', {                                                                              // 27
    name: 'dashboard',                                                                                        // 28
    action: function () {                                                                                     // 29
        BlazeLayout.render('MainLayout', {                                                                    // 30
            main: 'Dashboard'                                                                                 // 30
        });                                                                                                   // 30
    }                                                                                                         // 31
});                                                                                                           // 27
FlowRouter.route('/rings', {                                                                                  // 35
    name: 'rings',                                                                                            // 36
    action: function () {                                                                                     // 37
        BlazeLayout.render('MainLayout', {                                                                    // 38
            main: 'Rings'                                                                                     // 38
        });                                                                                                   // 38
    }                                                                                                         // 39
});                                                                                                           // 35
FlowRouter.route('/browse-rings', {                                                                           // 42
    name: 'browse-rings',                                                                                     // 43
    action: function () {                                                                                     // 44
        BlazeLayout.render('MainLayout', {                                                                    // 45
            main: 'BrowseRings'                                                                               // 45
        });                                                                                                   // 45
    }                                                                                                         // 46
});                                                                                                           // 42
FlowRouter.route('/rings/:id', {                                                                              // 49
    name: 'ring-single',                                                                                      // 50
    action: function () {                                                                                     // 51
        BlazeLayout.render('MainLayout', {                                                                    // 52
            main: 'RingSingle'                                                                                // 52
        });                                                                                                   // 52
    }                                                                                                         // 53
});                                                                                                           // 49
FlowRouter.route('/account', {                                                                                // 56
    name: 'account-settings',                                                                                 // 57
    action: function () {                                                                                     // 58
        BlazeLayout.render('MainLayout', {                                                                    // 59
            main: 'AccountSettings'                                                                           // 59
        });                                                                                                   // 59
    }                                                                                                         // 60
});                                                                                                           // 56
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"collections":{"Rings.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                            //
// collections/Rings.js                                                                                       //
//                                                                                                            //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                              //
Rings = new Mongo.Collection('rings');                                                                        // 1
Rings.allow({                                                                                                 // 3
    insert: function (userId, doc) {                                                                          // 4
        return !!userId;                                                                                      // 5
    },                                                                                                        // 6
    update: function (userId, doc) {                                                                          // 7
        return !!userId;                                                                                      // 8
    }                                                                                                         // 9
});                                                                                                           // 3
Tags = new SimpleSchema({                                                                                     // 12
    name: {                                                                                                   // 13
        type: String                                                                                          // 14
    }                                                                                                         // 13
});                                                                                                           // 12
RingSchema = new SimpleSchema({                                                                               // 18
    name: {                                                                                                   // 19
        type: String,                                                                                         // 20
        label: "Name"                                                                                         // 21
    },                                                                                                        // 19
    desc: {                                                                                                   // 23
        type: String,                                                                                         // 24
        label: "Description"                                                                                  // 25
    },                                                                                                        // 23
    tags: {                                                                                                   // 27
        type: [Tags]                                                                                          // 28
    },                                                                                                        // 27
    isPrivate: {                                                                                              // 30
        type: Boolean,                                                                                        // 31
        defaultValue: false,                                                                                  // 32
        optional: true,                                                                                       // 33
        autoform: {                                                                                           // 34
            type: "hidden"                                                                                    // 35
        }                                                                                                     // 34
    },                                                                                                        // 30
    createdBy: {                                                                                              // 38
        type: String,                                                                                         // 39
        label: "Created By",                                                                                  // 40
        autoValue: function () {                                                                              // 41
            return this.userId;                                                                               // 42
        },                                                                                                    // 43
        autoform: {                                                                                           // 44
            type: "hidden"                                                                                    // 45
        }                                                                                                     // 44
    },                                                                                                        // 38
    createdAt: {                                                                                              // 48
        type: Date,                                                                                           // 49
        label: "Created At",                                                                                  // 50
        autoValue: function () {                                                                              // 51
            return new Date();                                                                                // 52
        },                                                                                                    // 53
        autoform: {                                                                                           // 54
            type: "hidden"                                                                                    // 55
        }                                                                                                     // 54
    }                                                                                                         // 48
});                                                                                                           // 18
Meteor.methods({                                                                                              // 60
    togglePrivate: function (id, currentState) {                                                              // 61
        Rings.update(id, {                                                                                    // 62
            $set: {                                                                                           // 63
                isPrivate: true                                                                               // 64
            }                                                                                                 // 63
        });                                                                                                   // 62
    },                                                                                                        // 67
    togglePublic: function (id, currentState) {                                                               // 68
        Rings.update(id, {                                                                                    // 69
            $set: {                                                                                           // 70
                isPrivate: false                                                                              // 71
            }                                                                                                 // 70
        });                                                                                                   // 69
    },                                                                                                        // 74
    deleteRing: function (id) {                                                                               // 75
        Rings.remove(id);                                                                                     // 76
    }                                                                                                         // 77
});                                                                                                           // 60
Rings.attachSchema(RingSchema);                                                                               // 80
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"Users.js":function(require){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                            //
// collections/Users.js                                                                                       //
//                                                                                                            //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                              //
User = new SimpleSchema({                                                                                     // 1
    username: {                                                                                               // 2
        type: String,                                                                                         // 3
        // For accounts-password, either emails or username is required, but not both. It is OK to make this  // 4
        // optional here because the accounts-password package does its own validation.                       // 5
        // Third-party login packages may not require either. Adjust this schema as necessary for your usage.
        optional: true                                                                                        // 7
    },                                                                                                        // 2
    emails: {                                                                                                 // 9
        type: Array,                                                                                          // 10
        // For accounts-password, either emails or username is required, but not both. It is OK to make this  // 11
        // optional here because the accounts-password package does its own validation.                       // 12
        // Third-party login packages may not require either. Adjust this schema as necessary for your usage.
        optional: true                                                                                        // 14
    },                                                                                                        // 9
    "emails.$": {                                                                                             // 16
        type: Object                                                                                          // 17
    },                                                                                                        // 16
    "emails.$.address": {                                                                                     // 19
        type: String,                                                                                         // 20
        regEx: SimpleSchema.RegEx.Email                                                                       // 21
    },                                                                                                        // 19
    // Make sure this services field is in your schema if you're using any of the accounts packages           // 23
    services: {                                                                                               // 24
        type: Object,                                                                                         // 25
        optional: true,                                                                                       // 26
        blackbox: true,                                                                                       // 27
        autoform: {                                                                                           // 28
            type: "hidden"                                                                                    // 29
        }                                                                                                     // 28
    }                                                                                                         // 24
});                                                                                                           // 1
Meteor.users.attachSchema(User);                                                                              // 34
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"server":{"methods.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                            //
// server/methods.js                                                                                          //
//                                                                                                            //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                              //
                                                                                                              //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"publish.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                            //
// server/publish.js                                                                                          //
//                                                                                                            //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                              //
Meteor.publish('rings', function () {                                                                         // 1
    return Rings.find({});                                                                                    // 2
});                                                                                                           // 3
Meteor.publish('singleRing', function (id) {                                                                  // 5
    check(id, String);                                                                                        // 6
    return Rings.find({                                                                                       // 7
        _id: id                                                                                               // 7
    });                                                                                                       // 7
});                                                                                                           // 8
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"main.js":["meteor/meteor",function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                            //
// server/main.js                                                                                             //
//                                                                                                            //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                              //
var Meteor = void 0;                                                                                          // 1
module.import('meteor/meteor', {                                                                              // 1
  "Meteor": function (v) {                                                                                    // 1
    Meteor = v;                                                                                               // 1
  }                                                                                                           // 1
}, 0);                                                                                                        // 1
Meteor.startup(function () {// code to run on server at startup                                               // 3
});                                                                                                           // 5
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}]}},{"extensions":[".js",".json"]});
require("./lib/routes.js");
require("./collections/Rings.js");
require("./collections/Users.js");
require("./server/methods.js");
require("./server/publish.js");
require("./server/main.js");
//# sourceMappingURL=app.js.map
