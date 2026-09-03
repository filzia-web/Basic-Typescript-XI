/**
 * An LMS stores student performance data below.
 * The school wants to analyze students using different criteria.
 * A student is considered academically successful if:
 * - Score ≥ 75
 * - Attendance ≥ 90%
 * 
 * 
 * The teacher wants to generate:
 *  - Pass/fail status.
 *  - Academic performance category.
 *  - Attendance status.
 *  - Final recommendation.
 * 
 * Recommendation Rules:
 * ----------------------------------------------------------------|
 * | Condition                      | Recommendation               |
 * | ------------------------------ | ---------------------------- |
 * | Score ≥ 90 AND attendance ≥ 90 | Excellent                    |
 * | Score ≥ 75 AND attendance ≥ 90 | Good                         |
 * | Score ≥ 75 BUT attendance < 90 | Improve Attendance           |
 * | Score < 75                     | Improve Academic Performance |
 * ----------------------------------------------------------------|
 * 
 * Challenge:
 * - processStudents() should know nothing about these rules.
 * - It should only process the students and execute the callback.
 */

const students = [
    { name: "Alya", score: 92, attendance: 96 },
    { name: "Budi", score: 68, attendance: 88 },
    { name: "Citra", score: 84, attendance: 91 },
    { name: "Dimas", score: 73, attendance: 95 },
    { name: "Eka", score: 95, attendance: 82 },
    { name: "Fajar", score: 79, attendance: 97 }
];

function processStudents(
    students: { name: string; score: number; attendance: number }[],
    callback: (student: { name: string; score: number; attendance: number }) => void
) {
    for (const student of students) {
        callback(student);
    }
}

function generateReport(
    student: { name: string; score: number; attendance: number }
) {
    let passFail;
    let performance;
    let attendanceStatus;
    let recommendation;

    if (student.score >= 75 && student.attendance >= 90) {
        passFail = "Pass";
    } else {
        passFail = "Fail";
    }

    if (student.score >= 90) {
        performance = "Excellent";
    } else if (student.score >= 75) {
        performance = "Good";
    } else {
        performance = "Poor";
    }

    if (student.attendance >= 90) {
        attendanceStatus = "Good Attendance";
    } else {
        attendanceStatus = "Poor Attendance";
    }

    if (student.score >= 90 && student.attendance >= 90) {
        recommendation = "Excellent";
    } else if (student.score >= 75 && student.attendance >= 90) {
        recommendation = "Good";
    } else if (student.score >= 75 && student.attendance < 90) {
        recommendation = "Improve Attendance";
    } else {
        recommendation = "Improve Academic Performance";
    }

    console.log(student.name);
    console.log("Pass/Fail:", passFail);
    console.log("Performance:", performance);
    console.log("Attendance:", attendanceStatus);
    console.log("Recommendation:", recommendation);
}

processStudents(students, generateReport);