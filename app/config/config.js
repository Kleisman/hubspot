const hubspot = require("@hubspot/api-client");

const APIKEY = "750aceef-0687-48c5-ad51-2fb0d4c224ea";

const hubspotClient = new hubspot.Client({
  apiKey: APIKEY,
});

module.exports = hubspotClient;
