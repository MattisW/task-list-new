Tasks = new Mongo.Collection( 'tasks' );

Tasks.allow({
  insert: () => true,
  update: () => false,
  remove: () => false
});
/* Tasks.deny({
  insert: () => false,
  update: () => true,
  remove: () => true
});
*/
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
