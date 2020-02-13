const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  try {
    console.log('\n\n\n',req.headers);
    console.log(req.headers.authorization, '\n\n\n');
    // const token = req.headers.authorization.split(" ")[1];
    // jwt.verify(token, 'secret_this_should_be_longer_for_dev');
    next();
  } catch (err) {
    res.status(401).json({message: 'Auth Failed'});
  }
}
