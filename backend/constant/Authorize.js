
const jwt = require('jsonwebtoken')
require('dotenv').config()


const authorize = (req, res, next) => {
  try {
    const authToken = req.headers.authorization.slice("Bearer ".length);
    const payload = jwt.verify(authToken, process.env.SECRET_KEY);
    req.username = payload.username;
    next();
  } catch (error) {
    res.status(403).json({ error: "Invalid token" });
  }
};

module.exports = {
  authorize,
};
