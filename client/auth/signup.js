import {Template} from 'meteor/templating';
import {Meteor} from 'meteor/meteor';

Template.signup.onRendered(function () {
  $("#signupForm").validate({
    rules: {
      firstname: {
        required: true
      },
      lastname: {
        required: true
      },
      companyname: {
        required: true
      },
      propertyname: {
        required: true
      },
      unitsmanaged: {
        required: true
      }
    },
    messages: {
      firstname: {
        required: "Firstname is a required field"
      },
      lastname: {
        required: 'Lastname is a required field'
      },
      companyname: {
        required: 'Company name is a required field'
      },
      propertyname: {
        required: 'Property name is a required field'
      },
      unitsmanaged: {
        required: 'Units Managed is a required field'
      }
    },
    submitHandler () {
      const signUps = {
        firstname: $("#firstname").val(),
        lastname: $("#lastname").val(),
        companyname: $("#companyname").val(),
        propertyname: $("#propertyname").val(),
        unitsmanaged: $("#unitsmanaged").val()
      };

      Meteor.call('createSignUps', signUps, function (err, response) {
        if(!err) {
          document.getElementById('signupForm').reset();
          console.log("creted signups... ",response);
          FlowRouter.go('/');
        }
      });
    }
  });
});

Template.signup.events({
  'submit #signupForm' (e) {
    e.preventDefault();
    console.log("Form submitted");
  }
});
