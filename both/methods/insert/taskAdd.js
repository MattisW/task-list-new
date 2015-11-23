Meteor.methods({
    taskAdd:function(taskName, taskDate){
      check(taskName,String);
      check(taskDate,Date);
      
      Tasks.insert({
        name: taskName,
        dueDate: taskDate
      });
    }
});
