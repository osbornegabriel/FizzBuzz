def mult_three(i)
  i % 3 == 0
end

def mult_five(i)
  i % 5 == 0
end

def mult_of(i)
  if mult_three(i) && mult_five(i)
    "FizzBuzz"
  elsif mult_three(i)
    "Fizz"
  elsif mult_five(i)
    "Buzz"
  else
    i
  end
end

integers = Array(1..100)
integers.map!{|i| mult_of(i)}

#For if printing each value is necessary
integers.each{|i| p i}