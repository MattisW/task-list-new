Meteor.publish( 'template', function() {
  return Tasks.find();
});
