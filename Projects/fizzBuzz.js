/*
! FIZZBUZZ WHITEBOARDING CHALLENGE (pair coding)
************
    - create a variable named FB that gets initialized with a number
    - write a conditional that:  - 100 range
        - prints out "Fizz" if the number is divisible by 3
        - prints out "Buzz" if the number is divisible by 5
        - prints out "Fizz Buzz" if the number is divisible by BOTH 3 and 5
        - otherwise, prints the number
*/

for (var FB=1; FB < 101; FB++){
    if (FB % 15 == 0) console.log("FizzBuzz");
    else if (FB % 3 == 0) console.log("Fizz");
    else if (FB % 5 == 0) console.log("Buzz");
    else console.log(FB);
}

