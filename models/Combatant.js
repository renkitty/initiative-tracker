const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for AdUnits
let Combatant = new Schema({
  name: {
    type: String
  },
  description: {
    type: String
  }
},{
  collection: 'combatants'
});

module.exports = mongoose.model('Combatant', Combatant);
