const contacts = require("../models/contacts.model");

exports.getAll = (req, res) => {
  contacts.getAll(req, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.send(data);
    }
  });
};

exports.getById = (req, res) => {
  contacts.getById(req, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.send(data);
    }
  });
};

exports.webhooks = (req, res) => {
  contacts.webhooks(req, (err, data) => {
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
  contacts.create(req, (responseErr, response) => {
    if (responseErr) {
      res.status(500).send(responseErr);
    } else {
      res.status(200).send(response);
    }
  });
};

exports.update = (req, res) => {
  if (!req.body || Object.keys(req.body).length === 0) {
    res.status(400).send({
      message: "Debe enviar los campos.",
    });
    return;
  }

  contacts.update(req, (responseErr, response) => {
    if (responseErr) {
      console.log("responseErr: ", responseErr);
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

  contacts.delete(req, (responseErr, response) => {
    if (responseErr) {
      console.log("responseErr: ", responseErr);
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
