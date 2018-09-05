var x = 100;
for (i = 0; i < x; i++) {
    if (i % 3 == 0)
        console.log ("Fizz");
    else if (i % 5 == 0)
        console.log ("Buzz");
    if (i % 5 == 0 && i % 3 == 0) // comment out lines 7,8 to get Fizz or Buzz only
        console.log ("FizzBuzz");
    else
        console.log(i);
} 
    
