const globals = require("./configs/globals.js");
const jsdocPluginConfigs = require("./configs/jsdoc.js");
const importPluginConfigs = require("./configs/import.js");
const stylisticPluginConfigs = require("./configs/stylistic.js");
const esConfigs = require("./configs/es.js");

module.exports = [
  ...globals,
  ...esConfigs,
  ...importPluginConfigs,
  ...jsdocPluginConfigs,
  ...stylisticPluginConfigs,
];
