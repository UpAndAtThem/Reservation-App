const express = require('express');
const Reservation = require('../models/reservation');

const router = express.Router();

router.get('/reservations/:userId', (req, res, next) => {
  Reservation.find({ userId: req.params.userId }).then(dbReservations => {
    res.json({
      message: 'Reservations sent successfully',
      reservations: dbReservations
    });
  });
});

router.post('/addReservation', (req, res, next) => {
  const reservationDB = new Reservation(req.body);
  reservationDB.save();

  res.status(201).json({ message: 'Reservation added successfully' });
});

router.delete('/deleteReservation/:reservationId', (req, res, next) => {
  Reservation.deleteOne({_id: req.params.reservationId}, (err) => {
    console.log(err);
  });

  res.status(201).json({ message: 'Reservation deleted successfully'});
});

router.post('/editReso', (req, res, next) => {
  Reservation.updateOne({_id: req.body.reservationId}, req.body, (err) => {
    console.log('error obj', err);
  });

  res.status(201).json({ message: 'Reservation edited successfully' });
});

module.exports = router;
