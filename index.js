var fs = require('fs')
  , mappings = JSON.parse(fs.readFileSync('mappings.json'));

module.exports = function (countryCode) {
  return mappings[countryCode.toUpperCase()];
};
