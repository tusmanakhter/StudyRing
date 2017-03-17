User = new SimpleSchema({
    username: {
        type: String,
        // For accounts-password, either emails or username is required, but not both. It is OK to make this
        // optional here because the accounts-password package does its own validation.
        // Third-party login packages may not require either. Adjust this schema as necessary for your usage.
        optional: false
    },
    emails: {
        type: Array,
        // For accounts-password, either emails or username is required, but not both. It is OK to make this
        // optional here because the accounts-password package does its own validation.
        // Third-party login packages may not require either. Adjust this schema as necessary for your usage.
        optional: false
    },
    "emails.$": {
        type: Object
    },
    "emails.$.address": {
        type: String,
        regEx: SimpleSchema.RegEx.Email
    },
    // Make sure this services field is in your schema if you're using any of the accounts packages
    services: {
        type: Object,
        optional: true,
        blackbox: true,
        autoform: {
            type: "hidden"
        }
    },
    //This array stores the rings that a user joins
    rings: {
        type: Array,
        optional: true
    },
    //The rings array stores items of type string
    "rings.$": {
        type: String
    },
    //This is the profile object where the profile image will be stored
    profile: {
        type: Object,
        optional: true
    },
    //This is the profile image item which is stored as a string
    "profile.image": {
        type: String,
        optional: true
    }
});

Meteor.users.attachSchema( User );