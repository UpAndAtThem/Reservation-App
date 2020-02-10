const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

const Tool = require('./models/tool');
const Reservation = require('./models/reservation');
const User = require('./models/user');

mongoose
  .connect(
    'mongodb+srv://Jason:7EWHpUQ8R4FtnMXk@m001-79uyp.mongodb.net/tools?retryWrites=true&w=majority',
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(res => {
    console.log('\n\nconnected to mongoDB\n\n');
  })
  .catch(() => {
    console.log('connection failed');
  });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PATCH, DELETE, OPTIONS'
  );
  next();
});

app.post('/api/addUser', (req, res, next) => {
  userDB = new User(req.body);
  userDB.save();

  res.status(201).json({ message: 'User added successfully'});
});

app.get('/api/tools', (req, res, next) => {
  Tool.find().then(dbTools => {
    res.json({ message: 'Tools sent sucessfully', tools: dbTools });
  });
});

app.post('/api/addTool', (req, res, next) => {
  const toolDB = new Tool(req.body);

  toolDB.save();
  res.status(201).json({ message: 'Tool added successfully' });
});

app.post('/api/updateTool', (req, res, next) => {
  Tool.updateOne({_id: req.body._id}, req.body).then((res => {
    res.status(201).json({ message: 'Tool updated successfully'});
  }));
});

app.post('/api/deleteTool', (req, res, next) => {
  Tool.deleteOne({_id: req.body._id}, (err) => {
    res.status(201).json({ message: 'Tool Deleted successfully'});
  });
});

app.get('/api/reservations/:userId', (req, res, next) => {
  Reservation.find({ userId: req.params.userId }).then(dbReservations => {
    res.json({
      message: 'Reservations sent successfully',
      reservations: dbReservations
    });
  });
});

app.post('/api/addReservation', (req, res, next) => {
  const reservationDB = new Reservation(req.body);
  reservationDB.save();

  res.status(201).json({ message: 'Reservation added successfully' });
});

app.delete('/api/deleteReservation/:reservationId', (req, res, next) => {
  Reservation.deleteOne({_id: req.params.reservationId}, (err) => {
    console.log(err);
  });

  res.status(201).json({ message: 'Reservation deleted successfully'});
});

app.post('/api/editReso', (req, res, next) => {
  Reservation.updateOne({_id: req.body.reservationId}, req.body, (err) => {
    console.log('error obj', err);
  });

  res.status(201).json({ message: 'Reservation edited successfully' });
});

module.exports = app;
