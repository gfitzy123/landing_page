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

FlowRouter.route('/dashboard', {
  action: function (params, queryParams) {
    BlazeLayout.render('DashboardLayout', {content: 'DashboardHome'});
  }
});

FlowRouter.route('/dashboard/email/inbox', {
  action: function (params, queryParams) {
    BlazeLayout.render('DashboardLayout', {content: 'EmailInbox'});
  }
});

FlowRouter.route('/dashboard/email/draft', {
  action: function (params, queryParams) {
    BlazeLayout.render('DashboardLayout', {content: 'EmailDraft'});
  }
});

FlowRouter.route('/dashboard/email/sent', {
  action: function (params, queryParams) {
    BlazeLayout.render('DashboardLayout', {content: 'EmailSent'});
  }
});

FlowRouter.route('/dashboard/email/trash', {
  action: function (params, queryParams) {
    BlazeLayout.render('DashboardLayout', {content: 'EmailTrash'});
  }
});
