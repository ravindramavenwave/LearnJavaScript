/**
 * Created by ravindra.singh on 10/01/2016.
 */
var fs = require('fs')

//writing data to file
var writestream = fs.createWriteStream('nameslist.txt')

var namelist = ['amit','baldev','chetan','devendra','emmanuel','farid','gagan'];

var name;
writestream.once('open', function() {
  //for(var name  in namelist)
  namelist.forEach(function(data){
      writestream.write(data+'\n');
  });
  this.end();
});