Template.customerUpdate.helpers({
  instanceData: function(){
    console.log(Session.get('customerUpdateInstanceData'));
    return Session.get('customerUpdateInstanceData');
  }
});

Template.customerUpdate.events({
  'click #FormId' : function(evt){
    Session.set('customerUpdateInstanceData',pptForm.findOne({_id:'shjkh23897x'}));
  }
});
