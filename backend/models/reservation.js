const mongoose = require('mongoose');

const reservationSchema = mongoose.Schema({
  userId: {type: String, required: true},
  toolId: {type: String, required: true},
  reservationStartTime: {type: Date, required: true },
  reservationEndTime: {type: Date, required: true}
});

module.exports = mongoose.model('Reservation', reservationSchema);

