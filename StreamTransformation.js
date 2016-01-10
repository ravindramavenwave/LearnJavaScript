/**
 * Created by ravindra.singh on 10/01/2016.
 */
var Fs = require('fs');
var Transform = require('stream').Transform
var Inherits = require('util').inherits

function ActualBears () {
    console.log('Inside constructor');
    Transform.call(this);
}

//Implement Inheritance
Inherits(ActualBears,Transform);

//Override Inheritance
ActualBears.prototype._transform = function(chunk,enc,done){
   console.log('Inside the overridden method');
   chunk = chunk.toString().split('\n').filter(
       function(bear){
           return (bear !== 'amit')
       }
   ).join('\n')
    this.push();
    done();
}

//Read and Write Stream
var read = Fs.createReadStream('names.txt');
var write = Fs.createWriteStream('namelist1.txt');

//write pipe
read.pipe(new ActualBears()).pipe(write);