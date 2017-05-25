var fs = require('fs')
var read = require('./')

var rs = read(fs.openSync(__filename, 'r'), {retry: 100, startOffset: 0})

rs.on('data', function (buf) {
  console.log(buf.toString())
})
