Meteor.publish(null, function (){
  console.log("Roles beign subscribed...");
  return Meteor.roles.find({})
})
