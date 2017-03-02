var pictureStore = new FS.Store.GridFS("profilePictures");

ProfilePictures = new FS.Collection("profilePictures", {
 stores: [pictureStore],
    filter: {
        allow: {
            contentTypes: ['image/*']
        },
        onInvalid: function(message) {
            console.log("invalid type");
        }
    }
});

ProfilePictures.deny({
    insert: function(){
        return false;
    },
    update: function(){
        return false;
    },
    remove: function(){
        return false;
    },
    download: function(){
        return false;
    }
 });

ProfilePictures.allow({
    insert: function(){
        return true;
    },
    update: function(){
        return true;
    },
    remove: function(){
        return true;
    },
    download: function(){
        return true;
    }
});