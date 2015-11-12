require('babel/register')
require('./environment')
require('glob')(__dirname + '/../src/**/test.js', function (err, files) {
  if (err) throw err
  files.forEach(function (f) {
    require(f)
  })
})
