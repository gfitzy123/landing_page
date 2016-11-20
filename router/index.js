(function () {
  'use strict';
  import { Meteor } from 'meteor/meteor';
  import { Roles } from 'meteor/alanning:roles';

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

  var DashboardRouter = FlowRouter.group({
    prefix: '/dashboard',
    triggersEnter: [function (context,redirect) {

        if(!Meteor.userId()) {
          console.log("Could not authorize request")
          redirect('/');
        }else {
          if(Meteor.userId()) {
            var userId = Meteor.userId();
            console.log("UserID ", Meteor.userId(), Roles.userIsInRole(userId,['admin']));
            if(Roles.userIsInRole(userId,['admin'])) {
              console.log("Continue");
            }
            else {
              console.log('You are not authorized to view this page');
              redirect('/');
            }
          }
          else {
            alert("NOT AN ADMIN");
          }
          console.log("Validation passed Entering to admin site...")
        }

    }]
  });

  DashboardRouter.route('/', {
    action: function (params, queryParams) {
      BlazeLayout.render('DashboardLayout', {content: 'DashboardHome'});
    }
  });

  DashboardRouter.route('/email/inbox', {
    action: function (params, queryParams) {
      BlazeLayout.render('DashboardLayout', {content: 'EmailInbox'});
    }
  });

  DashboardRouter.route('/email/draft', {
    action: function (params, queryParams) {
      BlazeLayout.render('DashboardLayout', {content: 'EmailDraft'});
    }
  });

  DashboardRouter.route('/email/sent', {
    action: function (params, queryParams) {
      BlazeLayout.render('DashboardLayout', {content: 'EmailSent'});
    }
  });

  DashboardRouter.route('/email/trash', {
    action: function (params, queryParams) {
      BlazeLayout.render('DashboardLayout', {content: 'EmailTrash'});
    }
  });


  FlowRouter.route('/admin-site', {
    action: function (params , queryParams) {
      BlazeLayout.render('AdminLogin');
    }
  });

  FlowRouter.notFound = {
    // Subscriptions registered here don't have Fast Render support.
    subscriptions: function() {

    },
    action: function() {
      alert("Unrecognized request");
      BlazeLayout.render('BasicLayout', {content: 'home'});
    }
  };
})();
