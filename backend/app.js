const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

// const Tool = require('./models/tool');
// const Reservation = require('./models/reservation');
// const User = require('./models/user');

const reservationRoutes = require('./routes/reservation');
const userRoutes = require('./routes/user');
const toolRoutes = require('./routes/tool');

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
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PATCH, DELETE, OPTIONS'
  );
  next();
});

app.use("/api/user", userRoutes);
app.use("/api/tool", toolRoutes);
app.use("/api/reservation", reservationRoutes);


module.exports = app;
