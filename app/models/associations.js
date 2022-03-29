const hubspotClient = require("../config/config.js");

const associations = () => {};

associations.getTypes = async (req, response) => {
  try {
    const apiResponse = await hubspotClient.crm.associations.typesApi.getAll(
      req.params.from,
      req.params.to
    );
    response(null, apiResponse);
  } catch (e) {
    response(e);
  }
};

associations.getAll = async (req, response) => {
  try {
    const inputs = (req.body.inputs || []).map((input) => ({
      id: input.objectId,
    }));

    const apiResponse = await hubspotClient.crm.associations.batchApi.read(
      req.body.objectType,
      req.body.toObjectType,
      {
        inputs,
      }
    );
    response(null, apiResponse);
  } catch (e) {
    response(e);
  }
};

associations.create = async (req, response) => {
  try {
    const apiResponse = await hubspotClient.crm.objects.associationsApi.create(
      req.body.objectType,
      req.body.objectId,
      req.body.toObjectType,
      req.body.toObjectId,
      req.body.associationType
    );

    response(null, apiResponse);
  } catch (e) {
    response(e);
  }
};

associations.createMasive = async (req, response) => {
  try {
    const inputs = (req.body.inputs || []).map((input) => ({
      _from: {
        id: input.objectId,
      },
      to: {
        id: input.toObjectId,
      },
      type: input.associationType,
    }));

    const apiResponse = await hubspotClient.crm.associations.batchApi.create(
      req.body.objectType,
      req.body.toObjectType,
      {
        inputs,
      }
    );
    response(null, apiResponse);
  } catch (e) {
    response(e);
  }
};

associations.delete = async (req, response) => {
  try {
    const apiResponse = await hubspotClient.crm.objects.associationsApi.archive(
      req.body.objectType,
      req.body.objectId,
      req.body.toObjectType,
      req.body.toObjectId,
      req.body.associationType
    );

    response(null, apiResponse);
  } catch (e) {
    response(e);
  }
};

associations.deleteMasive = async (req, response) => {
  try {
    const inputs = (req.body.inputs || []).map((input) => ({
      _from: {
        id: input.objectId,
      },
      to: {
        id: input.toObjectId,
      },
      type: input.associationType,
    }));

    const apiResponse = await hubspotClient.crm.associations.batchApi.archive(
      req.body.objectType,
      req.body.toObjectType,
      {
        inputs,
      }
    );
    response(null, apiResponse);
  } catch (e) {
    response(e);
  }
};

module.exports = associations;
