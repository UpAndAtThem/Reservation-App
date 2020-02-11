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

router.get('/reservations/:toolId/:reservationStart', (req, res, next) => {
  let date = new Date(Number(req.params.reservationStart)).getDate();
  let month = new Date(Number(req.params.reservationStart)).getMonth();

  Reservation.find({toolId: req.params.toolId, date: date, month: month}).then(reservations => {
    res.status(201).json({message: 'successful', reservations: reservations});
  });

});

router.post('/addReservation', (req, res, next) => {
  let reservation = req.body;

  reservation.date = new Date(req.body.reservationStartTime).getDate();
  reservation.month = new Date(req.body.reservationStartTime).getMonth();

  console.log(reservation);

  const reservationDB = new Reservation(reservation);
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
