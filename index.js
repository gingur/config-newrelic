var fs = require('fs');
var path = require('path');

module.exports = function (config) {
  fs.writeFileSync(path.join(__dirname, 'newrelic.js'), "module.exports = " + JSON.stringify(config, null, 2) + ";");
  delete require.cache[require.resolve('newrelic')];
  return require('newrelic');
};

