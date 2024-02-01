// JavaScript Day 03 - excercises Basic
// Aufgabe: ex 1 | Highest value in an array
// Create a program to find the highest value in an array. 

// E.g. If we have the following values 1, 7, -3, 9 we should only get the highest value, number 9.

let numbers = [1, 7, -3, 9];

let max = numbers[0];

for (let val of numbers) {
  if (val > max) {
    max = val;
  }
}
console.log(max);

// Aufgabe: ex 2 | Temperature v2.0
// Now when you have program Temperature v1.0 done from the other day, it is time to upgrade it to the version 2.0. Now you should create a nice looking responsive front-end for your program (mobile friendly) and create more messages (e.g. if the temperature is above 32c output "The weather is hot" etc.) and you should display a proper image for the current weather condition.




// print from 1 to 100

// for (let i = 1; i <= 100; i++) {
//   document.write(i + "<br>");
// }

/* 
start point i = 1
condition 1 <= 100 true (we go inside the loop (block)) 1 + <br>
i = 2
condition 2 <= 100 true (we go inside the loop (block)) 2 + <br>
i = 3
condition 3 <= 100 true (we go inside the loop (block)) 3 + <br>

i = 100
condition 100 <= 100 true (we go inside the loop (block)) 100 + <br>

i = 101
condition 101 <= 100 false
*/

// for (let i = 0; i < students.length; i++) {
//   document.write(students[i] + "<hr>");
// }

// document.write(students[0] + "<hr>");
// document.write(students[1] + "<hr>");
// document.write(students[2] + "<hr>");
// document.write(students[3] + "<hr>");
// document.write(students[4] + "<hr>");
// document.write(students[5] + "<hr>");
// document.write(students[6] + "<hr>");

/* 
standard for loop, <array, counting numbers>
for of loop used only with arrays and it prints you values 
for in used only with arrays and it brings you index and values 
foreach used only with arrays and it brings you values and indexes
 */

// for (let val of students) {
//   document.write(val + "<hr>");
// }

// for (let i in students) {
//   console.log(i, students[i]);
// }

// let students = [
//   "John",
//   "test 2",
//   "Mary",
//   "Serri",
//   "MJ",
//   "Dusan",
//   "Johnny",
//   "Karmin",
// ];

// students.forEach((val, i) => {
//   console.log(val, i);
// });

// let numbers = [50, 90, 20, 99, 5];

// let max = numbers[0];

// for (let val of numbers) {
//   if (val > max) {
//     max = val;
//   }
// }

// console.log(max);

/* 
    val = 50
    50 > 50  false

    val = 90
    90 > 50 true  max = 90

    val = 20 
    20 > 90 false

    val = 99
    99 > 90  true   max = 99

    val = 5
    5 > 99 false

    max = 99
*/
