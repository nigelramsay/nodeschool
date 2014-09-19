var fs = require('fs')

fs.readdir(process.argv[2], function(err, list){
  list.forEach(function(filename){
    fileParts = filename.split('.')

    if(fileParts.length > 1 && fileParts[fileParts.length - 1] == process.argv[3]){
      console.log(filename)
    }
  })
})
