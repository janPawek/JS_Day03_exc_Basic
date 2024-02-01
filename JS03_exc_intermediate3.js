// JavaScript Day 03 - excercises Intermediate
// Aufgabe:ex 3 | Loop
// try to recreate this form using a loop :

// *

// **

// ***

// ****

// *****

// ******


for (let i = 1; i <= 6; i++) {
    let row = '';

    for (let j = 1; j <= i; j++) {
        row += '*';
    }

    console.log(row);
}
