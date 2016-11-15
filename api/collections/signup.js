import { Mongo } from 'meteor/mongo';

export const SignUps = new Mongo.Collection('signups');

const SignUpsSchema = new SimpleSchema({
  firstname: {
    type: String
  },
  lastname: {
    type: String
  },
  companyname: {
    type: String
  },
  propertyname: {
    type: String
  },
  unitsmanaged: {
    type: String
  },
});

SignUps.attachSchema(SignUpsSchema);
