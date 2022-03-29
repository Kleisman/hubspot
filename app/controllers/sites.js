const model = require("../models/sites");

exports.getAll = (req, res) => {
  model.getAll(req, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.send(data);
    }
  });
};

exports.getById = (req, res) => {
  model.getById(req, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.send(data);
    }
  });
};

exports.create = (req, res) => {
  if (!req.body || Object.keys(req.body).length === 0) {
    res.status(400).send({
      message: "Debe enviar los campos.",
    });
    return;
  }
  model.create(req, (responseErr, response) => {
    if (responseErr) {
      res.status(500).send(responseErr);
    } else {
      res.status(200).send(response);
    }
  });
};

exports.createAssociations = (req, res) => {
  if (!req.body || Object.keys(req.body).length === 0) {
    res.status(400).send({
      message: "Debe enviar los campos.",
    });
    return;
  }
  model.createAssociations(req, (responseErr, response) => {
    if (responseErr) {
      res.status(500).send(responseErr);
    } else {
      res.status(200).send(response);
    }
  });
};


exports.update = (req, res) => {
  const id = req.params.id;
  if (!id) {
    res.status(400).send({
      message: "Debe enviar el id.",
    });
    return;
  }

  if (!req.body || Object.keys(req.body).length === 0) {
    res.status(400).send({
      message: "Debe enviar los campos.",
    });
    return;
  }

  model.update(req, (responseErr, response) => {
    if (responseErr) {
      res.status(500).send(responseErr);
    } else {
      res.status(200).send(response);
    }
  });
};

exports.delete = (req, res) => {
  const id = req.params.id;
  if (!id) {
    res.status(400).send({
      message: "Debe enviar el id.",
    });
    return;
  }

  model.delete(req, (responseErr, response) => {
    if (responseErr) {
      if (responseErr.noFound) {
        res.status(404).send({
          message: `No se econtró id:  ${id}.`,
        });
      } else {
        res.status(500).send(responseErr);
      }
    } else {
      res.status(200).send(response);
    }
  });
};
