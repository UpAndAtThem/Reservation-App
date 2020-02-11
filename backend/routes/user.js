const express = require('express');
const User = require('../models/user');
const bcrypt = require('bcrypt');

const router = express.Router();

router.post('/addUser', (req, res, next) => {
  const user = req.body;

  bcrypt.hash(user.password, 10).then(hash => {
    userDB = new User({
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
      password: hash
    });

    userDB.save().then(result => {
      res.status(201).json({ message: 'User added successfully' });
    }).catch(err => {
      console.log('Error');
      console.log(err);
    });
  });
});

router.post('/getUser', (req, res, next) => {
  User.findOne({email: req.body.email}).then((user) => {
    if(user) {
      res.status(200).json({status: '200', message: 'Got User successfully', user: user});
    } else {
      res.status(201).json({status: '401', message: 'Auth Failed'});
    }
  }).catch((err) => {
    console.log(err);
  });
});

module.exports = router;
