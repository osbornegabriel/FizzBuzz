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

var values = new Array(100);
var fizzBuzzValues = values.fill().map(function(value, index){
  return multOfEval(index + 1);
})
fizzBuzzValues.forEach(function(x){
  console.log(x);
})