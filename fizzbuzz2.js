var multOfEval;
var logFizzBuzz;

multOfEval = function(multiple, divider){
  return multiple % divider === 0;
}

logFizzBuzz = function(x){
  if (multOfEval(x, 15)){
    console.log("FizzBuzz");
  } else if (multOfEval(x,3)){
    console.log("Fizz");
  } else if (multOfEval(x,5)){
    console.log("Buzz");
  } else{
    console.log(x);
  }

}

for(var i = 1; i <= 100; i ++){
  logFizzBuzz(i);
}