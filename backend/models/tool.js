const mongoose = require('mongoose');

const toolSchema = mongoose.Schema({
  toolName: {type: String, required: true},
  toolDescription: {type: String, required: true},
  userNeedsCert: {type: Boolean, required: true },
  userMaxMonthlyReservations: {type: Number, default: 4}
});

module.exports = mongoose.model('Tool', toolSchema);
