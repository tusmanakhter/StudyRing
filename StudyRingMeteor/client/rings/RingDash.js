Template.RingDash.onCreated(function(){
    this.editMode = new ReactiveVar(false);
    var self = this;
    self.autorun(function (){
        self.subscribe('allUsers');
    });
});
