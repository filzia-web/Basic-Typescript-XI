/**
 * A university stores the final grades of students enrolled in the Backend Development course at array below.
 * Grade Categories
 * - A : 90–100
 * - B : 80–89
 * - C : 70–79
 * - D : below 70
 * 
 * Student Task Calculate:
 * - Number of A students
 * - Number of B students
 * - Number of C students
 * - Number of D students
 * - Highest score
 * - Lowest score
 * - Average score
 */

const students = [
    { name: "Alya", score: 88 },
    { name: "Budi", score: 71 },
    { name: "Citra", score: 95 },
    { name: "Dimas", score: 63 },
    { name: "Eka", score: 84 },
    { name: "Fajar", score: 79 },
    { name: "Gita", score: 92 },
    { name: "Hana", score: 67 }
];

let countA = 0;
let countB = 0;
let countC = 0;
let countD = 0;

let totalScore = 0;
let highestScore = students[0].score;
let lowestScore = students[0].score;

for (let i = 0; i < students.length; i++) {
    const student = students[i];

totalScore += student.score;

if (student.score >= 90) {
    countA++;
} else if (student.score >= 80) {
    countB++;
} else if (student.score >= 70) {
    countC++;
} else {
    countD++;
}

if (student.score > highestScore) {
    highestScore = student.score;
}
 if(student.score < lowestScore) {
    lowestScore = student.score;
}
}

const averageScore = totalScore / students.length;

console.log("Number of A students:", countA);
console.log("Number of B students:", countB);
console.log("Number of C students:", countC);
console.log("Number of D students:", countD);
console.log("Highest Score:", highestScore);
console.log("Lowest Score:", lowestScore);
console.log("Average Score:", averageScore);