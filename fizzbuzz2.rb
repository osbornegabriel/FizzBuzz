i = 1

def eval_mult(multiple, divider)
  multiple % divider == 0
end

while i <= 100
  if eval_mult(i,15)
    puts "FizzBuzz"
  elsif eval_mult(i,3)
    puts "Fizz"
  elsif eval_mult(i,5)
    puts "Buzz"
  else
    puts i
  end
  i += 1
end