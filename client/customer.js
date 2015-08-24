Template.customerPage.helpers({
  customers: function(){
    return Customers.find({});
  },
  instanceData: function(){
    console.log(Session.get('customerUpdateInstanceData'));
    return Session.get('customerUpdateInstanceData');
  }
});

Template.customerPage.events({
  'click #customerDeleteButton': function(){
    Customers.remove(this._id);
  },
  'click #FormId' : function(evt){
    Session.set('customerUpdateInstanceData',pptForm.findOne({_id:'shjkh23897x'}));
  }
});
