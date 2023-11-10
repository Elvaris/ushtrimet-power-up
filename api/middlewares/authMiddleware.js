const jwt = require('jsonwebtoken');
const secretKey = 'ssv1';
const authenticateToken = (req, res, next) => {
  const token = req.header('Authorization');
  if (!token) return res.status(401).send('Access Denied');
  try {
    const decoded = jwt.verify(token, secretKey);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(403).send('Invalid Token');
  }
};
module.exports = authenticateToken;