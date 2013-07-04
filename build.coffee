request = require 'superagent'
jsdom   = require 'jsdom'
fs      = require 'fs'

# countries = {}

# jsdom.env
#   html: "http://en.wikipedia.org/wiki/ISO_3166-1_alpha-2"
#   scripts: ["http://code.jquery.com/jquery.js"]
#   done: (errors, window) ->
#     $ = window.$
#     $table = $ $('table.wikitable').get(2)
#     $trs   = $table.find('tr')
#     $trs.next().each ->
#       $tds = $(@).find 'td'
#       code = $tds.first().text()
#       countries[code] =
#         name: $tds.next().first().text()
#         link: $tds.next().first().find('a').attr('href')



countries = JSON.parse fs.readFileSync 'mappings.json', 'utf8'
console.log countries

subl
.get('http://en.wikipedia.org/wiki/Germany')
.end (res) ->
  res.text
