const express = require('express');
const User = require('../models/user');

const router = express.Router();

router.post('/addUser', (req, res, next) => {
  userDB = new User(req.body);
  // userDB.save();
  console.log(req.body);
  res.status(201).json({ message: 'User added successfully'});
});

module.exports = router;
