const mongoose = require('mongoose');

const reservationSchema = mongoose.Schema({
  userId: {type: String, required: true},
  toolId: {type: String, required: true},
  reservationStartTime: {type: Number, required: true },
  reservationEndTime: {type: Number, required: true},
  date: {type: Number, required: true},
  month: {type: Number, required: true}
});

module.exports = mongoose.model('Reservation', reservationSchema);

