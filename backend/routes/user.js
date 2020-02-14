const express = require('express');
const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const router = express.Router();

router.post('/addUser', (req, res, next) => {
  const user = req.body;

  bcrypt.hash(user.password, 10).then(hash => {
    userDB = new User({
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
      isAdmin: user.isAdmin,
      password: hash
    });

    userDB
      .save()
      .then(result => {
        res.status(201).json({ message: 'User added successfully' });
      })
      .catch(err => {
        res.status(401).json({message: 'Something went wrong', err: err.message});
        console.log('Error');
        console.log(err.message, '\n\n');
      });
  });
});

router.post('/getUser', (req, res, next) => {
  User.findOne({ email: req.body.email })
    .then(user => {
      if (user) {
        bcrypt
          .compare(req.body.password, user.password)
          .then(passwordsMatch => {
            let token;
            if (passwordsMatch) {
              token = jwt.sign(
                { email: user.email, userId: user._id },
                'secret_this_should_be_longer_for_dev',
                { expiresIn: '1h' }
              );

              return res.status(201).json({
                status: '201',
                message: 'Got User successfully',
                user: user,
                token: token
              });
            }
            res.status(401).json({ status: '401', message: 'Auth Failed' });
          })
          .catch(err => {
            console.log('\n\nError\n\n', err);
          });
      }
    })
    .catch(err => {
      console.log('Error', err);
    });
});

module.exports = router;
