// JavaScript Day 03 - excercises Intermediate
// Aufgabe:Compare two numbers

// Create a JavaScript program that will show the average grade for each student in the class. Here are the points for each student:

// Martin = 76,64,81,57,94

// Thomas = 85,49,81,72,55

// Klaus = 65,91,84,67,85

// Maria = 93,70,81,64,84

// David = 81,99,71,100,69

// Based on their points, output the grade, according to the following table:

// < 60 F

// < 70 D

// < 80 C

// < 90 B

// < 100 A

// Finally, calculate the class average and output it (e.g. if the class average is 74 points, their average grade will be C).

// Points for each student
const studentPoints = {
    Martin: [76, 64, 81, 57, 94],
    Thomas: [85, 49, 81, 72, 55],
    Klaus: [65, 91, 84, 67, 85],
    Maria: [93, 70, 81, 64, 84],
    David: [81, 99, 71, 100, 69]
};

// Function to calculate the grade based on points
function calculateGrade(points) {
    const average = points.reduce((sum, point) => sum + point, 0) / points.length;

    if (average < 60) {
        return 'F';
    } else if (average < 70) {
        return 'D';
    } else if (average < 80) {
        return 'C';
    } else if (average < 90) {
        return 'B';
    } else {
        return 'A';
    }
}

// Calculate and display the grade for each student
for (const student in studentPoints) {
    const grade = calculateGrade(studentPoints[student]);
    console.log(`${student}'s average grade is: ${grade}`);
}

// Calculate and display the class average and corresponding grade
const allPoints = [].concat(...Object.values(studentPoints)); // Flatten points array
const classAverage = allPoints.reduce((sum, point) => sum + point, 0) / allPoints.length;
const classGrade = calculateGrade(allPoints);

console.log(`\nClass average is: ${classAverage.toFixed(2)}, corresponding grade: ${classGrade}`);
