/**
 * A teacher has a list of students and their exam scores below.
 * The teacher wants to analyze the exam results.
 * Tasks:
 * 1. Get an array containing only the student names.
 * expected array: ["Andi", "Budi", "Citra", "Deni", "Eka"]
 * 2. Get students who passed. Passing score is >= 70. 
 * expected array: [
 * { name: "Andi", score: 85 },
 * { name: "Citra", score: 91 },
 * { name: "Deni", score: 74 }
 * ]
 * 
 * 3. Find the student named "Citra".
 * 4. Calculate the average score.
 */

const students = [
  { name: "Andi", score: 85 },
  { name: "Budi", score: 62 },
  { name: "Citra", score: 91 },
  { name: "Deni", score: 74 },
  { name: "Eka", score: 55 },
];
function getStudentNames() {
    const names: string[] = [];

    for (const student of students) {
        names.push(student.name);
    }

    return names;
}

function getPassedStudents() {
    const passedStudents = [];

    for (const student of students) {
        if (student.score >= 70) {
            passedStudents.push(student);
        }
    }

    return passedStudents;
}

function findCitra() {
    for (const student of students) {
        if (student.name === "Citra") {
            return student;
        }
    }
}

function calculateAverageScore() {
    let total = 0;

    for (const student of students) {
        total += student.score;
    }

    return total / students.length;
}

console.log("Student Names:", getStudentNames());
console.log("Passed Students:", getPassedStudents());
console.log("Citra:", findCitra());
console.log("Average Score:", calculateAverageScore());