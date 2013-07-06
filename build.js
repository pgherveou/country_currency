// var request = require('superagent')
//   , jsdom = require('jsdom')
//   , fs = require('fs')
//   , countries = {};

// jsdom.env(
//   "http://www.currencysymbols.in/",
//   ["http://code.jquery.com/jquery.js"],
//   function(errors, window) {
//     var $ = window.$
//       , $table = $('table')
//       , $trs = $table.find('tr');

//     $trs.next().each(function() {
//       var $ths = $(this).find('th')
//         , code = $ths.next().first().text();

//       // if ($nb){
//       //   code = $tds.first().text();
//       //   for ($nb ; $nb > 0; $nb--)
//       //     code = $tds.next();
//       // }
//       // else
//       //   code

//       countries[code] = {
//         country: $ths.next().first().text(),
//         currency: $ths.next().next().first().text(),
//         code: $ths.next().next().next().first().text(),
//         symbol: $ths.next().next().next().next().first().text()

//       };
//       console.log("code: ", code, countries[code] );

//      fs.writeFileSync('mappings2.json', JSON.stringify(countries, null, 4));

//     });

//   }
// );


var _ = require('underscore')
  , fs = require('fs')
  , path = require('path');

mapping1 = JSON.parse(fs.readFileSync(path.join(__dirname, 'mappings.json')));
mapping2 = JSON.parse(fs.readFileSync(path.join(__dirname, 'mappings2.json')));

var countries = {};

_(mapping1).each(function (el, code) {
  var name = el.name;
  var match = mapping2[name];
  // if (match) countries[code] = match;
  if (!match) console.log(name);

});

// fs.writeFileSync('mappings3.json', JSON.stringify(countries, null, 4));


