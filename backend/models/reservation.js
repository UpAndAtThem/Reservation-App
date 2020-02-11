const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const reservationSchema = mongoose.Schema({
  userId: {type: String, required: true},
  toolId: {type: String, required: true},
  reservationStartTime: {type: Number, required: true},
  reservationEndTime: {type: Number, required: true},
  date: {type: Number, required: true},
  month: {type: Number, required: true}
});

reservationSchema.index({ toolId: 1, reservationStartTime: 1, date: 1, month: 1}, { unique: true });

reservationSchema.plugin(uniqueValidator);

module.exports = mongoose.model('Reservation', reservationSchema);

