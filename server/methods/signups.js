import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';

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

  }
});
