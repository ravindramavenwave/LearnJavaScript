/**
 * Created by ravindra.singh on 10/01/2016.
 */
var spawn = require('child_process').spawn;

var bears = 0;

bears += 1;

if(process.argv[2] === 'child'){
    var net = require('net');
    var pipe = new net.Socket({fd : 3})
    pipe.write('kill me');
    console.log('This is the child process');
}
else
{
    var child = spawn(process.execPath, [__filename, 'child'],{
        stdio : [null,null,null,'pipe']
    });

    child.stdio[3].on('data', function(data){
        if(data.toString() === 'kill me'){
            console.log('RIP');
            child.kill();
        }
    })
    //console.log('parent',bears);
}