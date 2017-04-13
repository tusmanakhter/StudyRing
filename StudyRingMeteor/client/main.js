Meteor.startup(function () {
    //Configuration for the alerts package
    sAlert.config({
        effect: 'scale',
        position: 'top-right',
        timeout: 5000,
        html: false,
        onRouteClose: true,
        stack: true,
        offset: 50, // in px - will be added to first alert (bottom or top - depends of the position in config)
        beep: false,
        onClose: _.noop
    });

});