//This function sends a user to the dashboard at login and to home on logout
if(Meteor.isClient){
    Accounts.onLogin(function(){
        FlowRouter.go('dashboard');
    });

    Accounts.onLogout(function(){
        FlowRouter.go('home');
    });
}

//This route brings a user to home if they logs out or tries to go on another page
FlowRouter.triggers.enter([function(context, redirect){
    if(!Meteor.userId()){
        FlowRouter.go('home');
    }
}]);

//This route sends a user to the dashboard if they are logged in, or else it brings them to the home page
FlowRouter.route('/', {
    name: 'home',
    action() {
        if(Meteor.userId()){
            FlowRouter.go('dashboard');
        }
        BlazeLayout.render('HomeLayout');
    }
});

//This route sends a user to the login page
FlowRouter.route('/login', {
  name: 'Login',
  action() {
      BlazeLayout.render('Login');
  }
});

//This route sends a user to the forgot password page
FlowRouter.route('/forgotpassword', {
  name: 'ForgotPassword',
  action() {
      BlazeLayout.render('ForgotPassword');
  }
});

//This route sends a user to the register page
FlowRouter.route('/register', {
  name: 'Register',
  action() {
    BlazeLayout.render('Register');
  }
});

//This route sends the user to to mainlayout with the dashboard injected in the content area
FlowRouter.route('/dashboard', {
    name: 'dashboard',
    action() {
        BlazeLayout.render('MainLayout', {main:'Dashboard'});
    }
});

//This route sends the user to to mainlayout with the create rings page injected in the content area
FlowRouter.route('/rings', {
    name: 'rings',
    action() {
        BlazeLayout.render('MainLayout', {main:'Rings'});
    }
});

//This route sends the user to to mainlayout with the browse rings page injected in the content area
FlowRouter.route('/browse-rings', {
    name: 'browse-rings',
    action() {
        BlazeLayout.render('MainLayout', {main:'BrowseRings'});
    }
});

//This route sends the user to to mainlayout with the ring dashboard injected in the content area
FlowRouter.route('/rings/:id', {
    name: 'ring-dash',
    action() {
        BlazeLayout.render('MainLayout', {main:'RingDash'});
    }
});

//This route sends the user to to mainlayout with the account setting page injected in the content area
FlowRouter.route('/account', {
    name: 'account-settings',
    action() {
        BlazeLayout.render('MainLayout', {main:'AccountSettings'});
    }
});

//This route sends the user to to mainlayout with the main forum page injected in the content area
FlowRouter.route('/forum',{
    name: 'main-forum',
    action(){
        BlazeLayout.render('MainLayout',{main:'MainForum'})
    }
});
