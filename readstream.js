/**
 * Created by ravindra.singh on 10/01/2016.
 */
var fs = require('fs');

//create a read stream
var dataItems = fs.createReadStream('names.txt');

dataItems.on('data', function(data){
        console.log(data.toString());
  })

