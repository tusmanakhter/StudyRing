if(Meteor.isClient){
    Accounts.onLogin(function(){
        FlowRouter.go('dashboard');
    });

    Accounts.onLogout(function(){
        FlowRouter.go('home');
    });
}

FlowRouter.triggers.enter([function(context, redirect){
    if(!Meteor.userId()){
        FlowRouter.go('home');
    }
}]);

FlowRouter.route('/', {
    name: 'home',
    action() {
        if(Meteor.userId()){
            FlowRouter.go('dashboard');
        }
        BlazeLayout.render('HomeLayout');
    }
});

FlowRouter.route('/dashboard', {
    name: 'dashboard',
    action() {
        BlazeLayout.render('MainLayout', {main:'Dashboard'});
    }
});


FlowRouter.route('/rings', {
    name: 'rings',
    action() {
        BlazeLayout.render('MainLayout', {main:'Rings'});
    }
});

FlowRouter.route('/browse-rings', {
    name: 'browse-rings',
    action() {
        BlazeLayout.render('MainLayout', {main:'BrowseRings'});
    }
});

FlowRouter.route('/rings/:id', {
    name: 'ring-single',
    action() {
        BlazeLayout.render('MainLayout', {main:'RingSingle'});
    }
});

FlowRouter.route('/account', {
    name: 'account-settings',
    action() {
        BlazeLayout.render('MainLayout', {main:'AccountSettings'});
    }
});
