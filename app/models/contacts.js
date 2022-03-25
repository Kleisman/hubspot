const hubspotClient = require("../config/config.js");
const limit = undefined;
const after = undefined;
const properties = undefined;
const contacts = () => {};

contacts.getAll = async (_, response) => {
  try {
    const apiResponse = await hubspotClient.crm.contacts.getAll(
      limit,
      after,
      properties
    );
    response(null, apiResponse);
  } catch (e) {
    response(e);
  }
};

contacts.getById = async (req, response) => {
  try {
    const apiResponse = await hubspotClient.crm.contacts.basicApi.getById(
      req.params.id,
      properties
    );
    response(null, apiResponse);
  } catch (e) {
    response(e);
  }
};

contacts.create = async (req, response) => {
  try {
    const apiResponse = await hubspotClient.crm.contacts.basicApi.create({
      properties: req.body,
    });
    response(null, apiResponse);
  } catch (e) {
    response(e);
  }
};

contacts.update = async (req, response) => {
  const properties = {
    ...req.body,
  };
  const id = req.params.id;
  const SimplePublicObjectInput = { properties };
  try {
    const apiResponse = await hubspotClient.crm.contacts.basicApi.update(
      id,
      SimplePublicObjectInput
    );
    response(null, apiResponse);
  } catch (e) {
    response(e);
  }
};

contacts.delete = async (req, response) => {
  try {
    const apiResponse = await hubspotClient.crm.contacts.basicApi.archive(
      req.params.id
    );
    response(null, apiResponse);
  } catch (e) {
    response(e);
  }
};

module.exports = contacts;
