const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TodoSchema = new Schema({
  email: {
    type: String,
  },
  title: {
    type: String,
    required: true
  },
  desc: {
    type: String
  },
  date_den: {
    type : Date
  },
  date: {
    type: Date,
    default: Date.now
  },
  isChecked :{
    type:Boolean,
    default: false,
  }
});

module.exports = mongoose.model('todo', TodoSchema);
