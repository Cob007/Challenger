
const jwt = require('jsonwebtoken');
const { ErrorResponse } = require('./Model');
require('dotenv').config()


const authorize = (req, res, next) => {
  try {
    const authToken = req.headers.authorization.slice("Bearer ".length);
    const payload = jwt.verify(authToken, process.env.SECRET_KEY);
    req.email = payload.email;
    next();
  } catch (error) {
    res.status(403).json(ErrorResponse(403, `Error Occurred!! Caused by invalid / no token` ));
  }
};

module.exports = {
  authorize,
};
