Template.HomeLayout.events({
    'click .register': function() {
        FlowRouter.go('Register')
        console.log("clicked register button")

    }
});

Template.HomeLayout.helpers({
  register:function(){
    if(Session.get('register')==null){
      return false;
    }else{
    return Session.get('register');
  }
  }
});
