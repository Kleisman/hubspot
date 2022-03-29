const associations = require("../models/associations");

exports.getTypes = (req, res) => {
  const from = req.params.from;
  const to = req.params.to;
  if (!from || !to) {
    return res.status(400).send({
      message: "Debe enviar todos lo parametros .",
    });
  }
  associations.getTypes(req, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.send(data);
    }
  });
};

exports.getAll= (req, res) => {
  if (!req.body || Object.keys(req.body).length === 0) {
    res.status(400).send({
      message: "Debe enviar los campos.",
    });
    return;
  }
  associations.getAll(req, (err, data) => {
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
  associations.create(req, (responseErr, response) => {
    if (responseErr) {
      res.status(500).send(responseErr);
    } else {
      res.status(200).send(response);
    }
  });
};

exports.createMasive = (req, res) => {
  if (!req.body || Object.keys(req.body).length === 0) {
    res.status(400).send({
      message: "Debe enviar los campos.",
    });
    return;
  }

  associations.createMasive(req, (responseErr, response) => {
    if (responseErr) {
      res.status(500).send(responseErr);
    } else {
      res.status(200).send(response);
    }
  });
};

exports.delete = (req, res) => {
  associations.delete(req, (responseErr, response) => {
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

exports.deleteMasive = (req, res) => {
  if (!req.body || Object.keys(req.body).length === 0) {
    res.status(400).send({
      message: "Debe enviar los campos.",
    });
    return;
  }

  associations.deleteMasive(req, (responseErr, response) => {
    if (responseErr) {
      res.status(500).send(responseErr);
    } else {
      res.status(200).send(response);
    }
  });
};
