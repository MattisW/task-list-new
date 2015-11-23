Template.tasklist.events({
    "submit #tasksForm": function(event, template){
         event.preventDefault();
         console.log('EVENT: ' + event);

         let taskName = event.target.taskName.value;
         console.log('TARGET ' + event.target);
         console.log(taskName);
         let taskDate = event.target.taskDate.value;
         console.log(taskDate);
         Tasks.insert({
             taskName: taskName,
             taskDate: taskDate
         })
         //Meteor.call("taskAdd", taskName, taskDate);
         event.target.taskName.value = '';
         event.target.taskDate.value = '';
    }
});
