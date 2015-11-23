Template.tasklist.events({
    "submit #tasksForm": function(event, template){
         event.preventDefault();
         console.log('EVENT: ' + event);
         console.log('TEMPLATE: ' + Template);

         let taskName = event.target.taskName.value;
         let taskDate = event.target.taskDate.value;

         Meteor.call("taskAdd", taskName, taskDate);

    }
});
