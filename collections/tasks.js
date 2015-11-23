Tasks = new Meteor.Collection( 'tasks' );

Tasks.allow({
  insert: () => false,
  update: () => false,
  remove: () => false
});

Tasks.deny({
  insert: () => true,
  update: () => true,
  remove: () => true
});

let TaskSchema = new SimpleSchema({
  taskName: {
    type: String,
    label: "Name"
  },
  taskDate: {
    type: Date,
    label: "Datum",
    autoform: {
      type: "bootstrap-datepicker"
    }
  }
});

Tasks.attachSchema( TaskSchema );
