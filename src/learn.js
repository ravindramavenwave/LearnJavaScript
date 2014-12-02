/**
 * Created by ravindra.singh on 12/2/2014.
 */
function calculate(parameters){
    var x = parameters.x;
    var y = parameters.y;
    var sum =  x+y;
  return sum;
}

function test(){
    var object = new  Object();
    object.x = 10;
    object.y=20;
    alert(calculate(object));
}