const hubspotClient = require("../config/config.js");

const objectType = "2-5839777";
const limit = undefined;
const after = undefined;
const properties = ["site_name", "slug", "state", "address", "active"];
const propertiesWithHistory = undefined;
const associations = undefined;
const archived = false;
const sites = () => {};

sites.getAll = async (_, response) => {
  try {
    const apiResponse = await hubspotClient.crm.objects.basicApi.getPage(
      objectType,
      limit,
      after,
      properties,
      propertiesWithHistory,
      associations,
      archived
    );
    response(null, apiResponse);
  } catch (e) {
    response(e);
  }
};

sites.getById = async (req, response) => {
  try {
    const apiResponse = await hubspotClient.crm.objects.basicApi.getById(
      objectType,
      req.params.id,
      properties
    );
    response(null, apiResponse);
  } catch (e) {
    response(e);
  }
};

sites.create = async (req, response) => {
  try {
    const apiResponse = await hubspotClient.crm.objects.basicApi.create(
      objectType,
      {
        properties: req.body,
      }
    );
    response(null, apiResponse);
  } catch (e) {
    response(e);
  }
};

sites.update = async (req, response) => {
  const properties = {
    ...req.body,
  };
  const id = req.params.id;
  const SimplePublicObjectInput = { properties };
  try {
    const apiResponse = await hubspotClient.crm.objects.basicApi.update(
      objectType,
      id,
      SimplePublicObjectInput
    );
    response(null, apiResponse);
  } catch (e) {
    response(e);
  }
};

sites.delete = async (req, response) => {
  try {
    const apiResponse = await hubspotClient.crm.objects.basicApi.archive(
      objectType,
      req.params.id
    );
    response(null, apiResponse);
  } catch (e) {
    response(e);
  }
};

module.exports = sites;
