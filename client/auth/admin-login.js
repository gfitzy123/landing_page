import { Template } from 'meteor/templating';
import { Meteor } from 'meteor/meteor';

Template.AdminLogin.onRendered(function () {
  $("#adminLoginForm").validate({
    rules: {
      email: {
        required: true
      },
      password: {
        required: true
      }
    },
    messages: {
      email: {
        required: "Email is a required field"
      },
      password: {
        required: 'Password is a required field'
      }
    },
    submitHandler () {
      Meteor.loginWithPassword($('#email').val(),$('#password').val(), function (err) {
        if(!err) {
          FlowRouter.go('/dashboard');
        }
        else {
          alert(err.message);
        }
      });
    }
  });
});

Template.AdminLogin.events({
  'submit #adminLoginForm'(e) {
    e.preventDefault();

    Meteor.loginWithPassword($('#email').val(),$('#password').val());
  }
});
