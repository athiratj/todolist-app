const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create Schema
const TodoSchema = new Schema({
    name: {
      type: String,
      required: true
    },
    date: {
      type: Date,
      default: Date.now
    }
  });
  
module.exports = Item = mongoose.model('item', TodoSchema);
//   const Item = model('item', ItemSchema);
  
//   export default Item;