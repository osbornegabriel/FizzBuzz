var multThree;
var multFive;
var multOf;

multThree = function(x){
  return x % 3 === 0;
};

multFive = function(x){
  return x % 5 === 0;
}

multOfEval = function(x){
  if(multThree(x) && multFive(x)){
    return "FizzBuzz";
  } else if (multThree(x)){
    return "Fizz";
  } else if (multFive(x)){
    return "Buzz";
  } else {
    return x;
  }
}