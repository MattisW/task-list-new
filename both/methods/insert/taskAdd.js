Meteor.methods({
    taskAdd:function(taskName, taskDate){
      // check(taskName,String);
      console.log('METHOD IS FIRING');
      Tasks.insert({
        'taskName': taskName,
        'taskDate': taskDate
      });
    }
});
