const express = require('express');
const Reservation = require('../models/reservation');

const router = express.Router();
const checkAuth = require('../middleware/check-auth');

router.get('/reservations/:userId', checkAuth, (req, res, next) => {
  Reservation.find({ userId: req.params.userId }).then(dbReservations => {
    res.json({
      message: 'Reservations sent successfully',
      reservations: dbReservations
    });
  });
});

router.get('/reservations/:toolId/:reservationStart', checkAuth, (req, res, next) => {
  let date = new Date(Number(req.params.reservationStart)).getDate();
  let month = new Date(Number(req.params.reservationStart)).getMonth();

  Reservation.find({toolId: req.params.toolId, date: date, month: month}).then(reservations => {
    res.status(201).json({message: 'successful', reservations: reservations});
  });

});

router.post('/addReservation', checkAuth, (req, res, next) => {
  let reservation = req.body;

  reservation.date = new Date(req.body.reservationStartTime).getDate();
  reservation.month = new Date(req.body.reservationStartTime).getMonth();

  const reservationDB = new Reservation(reservation);

  reservationDB.save(err => {
    if (err) {
      res.status(201).json({ status: '404', message: err.message });
    } else {
      res.status(201).json({ status: '201', message: 'Reservation added successfully' });
    }
  });
});

router.delete('/deleteReservation/:reservationId', checkAuth, (req, res, next) => {
  Reservation.deleteOne({_id: req.params.reservationId}, (err) => {
    console.log(err);
  });

  res.status(201).json({ message: 'Reservation deleted successfully'});
});

router.post('/editReso', checkAuth, (req, res, next) => {
  Reservation.updateOne({_id: req.body.reservationId}, req.body, (err) => {
    console.log('error obj', err);

    if (err) {
      res.status(201).json({ status: '401', message: 'Reservation edit Failed'});
    } else {
      res.status(201).json({ status: '201', message: 'Reservation edited successfully' });
    }
  });
});

module.exports = router;
