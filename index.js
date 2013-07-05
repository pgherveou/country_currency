var fs = require('fs')
	, path = require('path')
  , mappings = JSON.parse(fs.readFileSync(path.join(__dirname, 'mappings.json')));

module.exports = function (countryCode) {
  return mappings[countryCode.toUpperCase()];
};
