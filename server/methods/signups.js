import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';

import { Roles } from 'meteor/alanning:roles';


import { SignUps } from '../../api/collections/signup';

Meteor.methods({
  createSignUps(signups) {
    check(signups, {
      firstname: String,
      lastname: String,
      companyname: String,
      propertyname: String,
      unitsmanaged: String
    });

    return SignUps.insert(signups);

  },
  createAdminUser(user) {
    check(user, {
      email: String,
      password: String
    });

    
    var id = Accounts.createUser(user);
    Roles.addUsersToRoles(id, ['admin']);

    return id;
  }
});
