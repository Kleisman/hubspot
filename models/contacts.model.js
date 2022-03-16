const hubspotClient = require("./config.js");

const contacts = () => {};

contacts.getAll = async (_, response) => {
  try {
    const apiResponse = await hubspotClient.crm.contacts.getAll();
    response(null, apiResponse);
  } catch (e) {
    response(e);
  }
};

contacts.getById = async (req, response) => {
  try {
    const apiResponse = await hubspotClient.crm.contacts.basicApi.getById(
      req.params.id,
      ["site", "site_name", "site_id", "plan_info"]
    );
    response(null, apiResponse);
  } catch (e) {
    response(e);
  }
};

contacts.webhooks = async (req, response) => {
  try {
    const apiResponse = await hubspotClient.webhooks.settingsApi.getAll(
      750414
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
  const id = req.body.id;
  delete properties.id;
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
    console.log('apiResponse: ', apiResponse);
    response(null, apiResponse);
  } catch (e) {
    response(e);
  }
};

module.exports = contacts;
