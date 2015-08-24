Router.configure({
  layoutTemplate: 'mainLayout'
});

Router.route('/', function () {
  this.render('customerPage');
});

Router.route('/update/:_id', function () {
  var item = Customers.findOne({_id: this.params._id});
  this.render('customerUpdate', {data: item});
});
