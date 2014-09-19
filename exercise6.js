var filemodule = require('./exercise6file.js')

// filemodule.smartls(process.argv[2], process.argv[3], function(err, filenames){
//   filenames.forEach(function(filename){console.log(filename)})
// })

filemodule(process.argv[2], process.argv[3], function(err, filenames){
  filenames.forEach(function(filename){console.log(filename)})
})
