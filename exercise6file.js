var fs = require('fs')

// module.exports = {
//   smartls: function(directory, extension, callback){
//     fs.readdir(directory, function(err, list){
//       if(err) { callback(err, []) }

//       var matching = []
//       list.forEach(function(filename){
//         fileParts = filename.split('.')

//         if(fileParts.length > 1 && fileParts[fileParts.length - 1] == extension){
//           matching.push(filename)
//         }
//       })
//       callback(err, matching)
//     })
//   }
// }

module.exports = function(directory, extension, callback){
  fs.readdir(directory, function(err, list){
    if(err) { return callback(err) }

    var matching = []
    list.forEach(function(filename){
      fileParts = filename.split('.')

      if(fileParts.length > 1 && fileParts[fileParts.length - 1] == extension){
        matching.push(filename)
      }
    })
    callback(err, matching)
  })
}
