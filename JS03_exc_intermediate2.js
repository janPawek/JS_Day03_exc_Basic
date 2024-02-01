// JavaScript Day 03 - excercises Intermediate
// Aufgabe:ex 2 | FizzBuzz


// Create a JavaScript program which iterates the integers from 1 to 100. For multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz". For numbers which are multiples of both three and five print "FizzBuzz".

// e.g. 

// 1
// 2
// Fizz
// 4
// Buzz
// Fizz
// 7
// 8
// Fizz
// Buzz
// 11
// Fizz
// 13
// 14
// FizzBuzz
// 16
// 17
// Fizz
// 19
// Buzz

// etc.


for (let i = 1; i <= 100; i++) {
    // Check if the number is a multiple of both three and five
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        // Check if the number is a multiple of three
        console.log("Fizz");
    } else if (i % 5 === 0) {
        // Check if the number is a multiple of five
        console.log("Buzz");
    } else {
        // Print the number if it's not a multiple of three or five
        console.log(i);
    }
}
// This program uses a for loop to iterate through numbers from 1 to 100 and checks the conditions for Fizz, Buzz, and FizzBuzz. If none of these conditions are met, it simply prints the current number.




