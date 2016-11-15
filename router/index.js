FlowRouter.route('/', {
  action: function (params,queryParams) {
    BlazeLayout.render('BasicLayout',{content: 'home'});
  }
});


FlowRouter.route('/signup', {
  action: function (params,queryParams) {
    BlazeLayout.render('BasicLayout', {content: 'signup'});
  }
});
