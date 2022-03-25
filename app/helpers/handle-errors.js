const httpErrors = (res, err) => {
  res.status(500).send(err);
};

module.exports = httpErrors;
