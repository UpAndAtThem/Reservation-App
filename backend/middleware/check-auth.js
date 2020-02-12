const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    console.log('Inside checkAuth\n\n', token, '\n\n');
    jwt.verify(token, 'secret_this_should_be_longer_for_dev');
    next();
  } catch (err) {
    res.status(401).json({message: 'Auth Failed'});
  }
}
