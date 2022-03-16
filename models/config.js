const hubspot = require("@hubspot/api-client");

const hubspotClient = new hubspot.Client({
  apiKey: '750aceef-0687-48c5-ad51-2fb0d4c224ea',
});

module.exports = hubspotClient;