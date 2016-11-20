import { Template } from 'meteor/templating';


Template.DashboardLayout.onRendered(function () {
  console.log("USER ID ", Meteor.userId());
  var userId = Meteor.userId();
  // if(Roles.userIsInRole(userId,['admin'])) {
  //   console.log("USER IN ROLES ADMIN");
  // }else {
  //   FlowRouter.go('/');
  //   console.log("USER IS NOT ADMIN", Roles.userIsInRole(userId,['admin']));
  // }
});
