const hubspot = require("@hubspot/api-client");

const hubspotClient = new hubspot.Client({
  apiKey: '750aceef-0687-48c5-ad51-2fb0d4c224ea',
  developerApiKey: 21583681,
  // 21583681 // 21584089 => OK
});

module.exports = hubspotClient;