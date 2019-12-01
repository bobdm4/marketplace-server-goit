const errorHandler = (err, req, res, next) => {
  if (err) {
    res.status(500).send("Error found: " + err.stack);
  }
};

module.exports = errorHandler;
