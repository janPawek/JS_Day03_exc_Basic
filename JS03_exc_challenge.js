// JavaScript Day 03 - excercise Challenge:
// Aufgabe:ex Description:

// To solve this task, you will need two arrays: Student and MathGrades. The arrays should have respectively in Students, the students names and in the MathGrades, in the same index, the students grade for Maths going from 0 to 100.

// Students = [“John”, “Jane”]

// MathGrades = [70, 85]

// There should be a variable that can store a student's name. This name should be compared to the Students array and, when it is found, should output the name and grade, nicely on the screen. I.e.:

// John has reached 70 points in Math this season.

// The grades should also be checked and if it is less than 60 it should show it in red color, if it is between 60 and 70, it should be yellow, over 70 it should show green and if it is 100, it should be blue.


// Hint: 

// prompt() function will make an alert window that has an input inside, when the user types its name in it, it can be saved in a variable, for example:

// var result = prompt("type your name");

// Arrays
const Students = ["John", "Jane"];
const MathGrades = [70, 85];

// Get student's name from the user
const studentName = prompt("Type your name");

// Find the index of the student in the Students array
const studentIndex = Students.indexOf(studentName);

// Check if the student is found
if (studentIndex !== -1) {
    const grade = MathGrades[studentIndex];
    let color;

    // Determine color based on the grade
    if (grade < 60) {
        color = "red";
    } else if (grade >= 60 && grade < 70) {
        color = "yellow";
    } else if (grade >= 70 && grade < 100) {
        color = "green";
    } else if (grade === 100) {
        color = "blue";
    }

    // Display the result on the screen
    console.log(`${studentName} has reached ${grade} points in Math this season.`);
    console.log(`Color: ${color}`);
} else {
    console.log("Student not found in the database.");
}
// This program uses the prompt() function to get the user's input, checks if the entered name is in the Students array, and then determines the color based on the grade. The results are displayed on the console.