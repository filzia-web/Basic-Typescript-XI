/**
 * An LMS stores assignment submission data at following array.
 * Business Rules
 * - Passing score = 75
 * - Students who do not submit receive 0
 * - Submitted assignments below 75 require revision.
 * 
 * The principal requests a report showing:
 * - Total students
 * - Submitted assignments
 * - Missing assignments
 * - Passed students
 * - Students requiring revision
 * - Average score
 * - Highest score
 * - Lowest score
 * 
 * Student Tasks
 * 1. Design your own functions.
 * At minimum, your solution must contain:
 * - 7 non-void functions
 * - 1 void function to display the report.
 * 
 */
const submissions = [
    {
        student: "Alya",
        submitted: true,
        score: 90
    },
    {
        student: "Budi",
        submitted: false,
        score: 0
    },
    {
        student: "Citra",
        submitted: true,
        score: 84
    },
    {
        student: "Dimas",
        submitted: true,
        score: 72
    },
    {
        student: "Eka",
        submitted: false,
        score: 0
    },
    {
        student: "Fajar",
        submitted: true,
        score: 96
    }
];

function getTotalStudents() {
    return submissions.length;
}

function getSubmitted() {
    let total = 0;

    for (const data of submissions) {
        if (data.submitted) {
            total++;
        }
    }

    return total;
}

function getMissing() {
    let total = 0;

    for (const data of submissions) {
        if (!data.submitted) {
            total++;
        }
    }

    return total;
}

function getPassed() {
    let total = 0;

    for (const data of submissions) {
        if (data.submitted && data.score >= 75) {
            total++;
        }
    }

    return total;
}

function getRevision() {
    let total = 0;

    for (const data of submissions) {
        if (data.submitted && data.score < 75) {
            total++;
        }
    }

    return total;
}

function getAverage() {
    let total = 0;

    for (const data of submissions) {
        total += data.score;
    }

    return total / submissions.length;
}

function getHighest() {
    let highest = submissions[0].score;

    for (const data of submissions) {
        if (data.score > highest) {
            highest = data.score;
        }
    }

    return highest;
}

function getLowest() {
    let lowest = submissions[0].score;

    for (const data of submissions) {
        if (data.score < lowest) {
            lowest = data.score;
        }
    }

    return lowest;
}

function printReport() {
    console.log("Total Students:", getTotalStudents());
    console.log("Submitted Assignments:", getSubmitted());
    console.log("Missing Assignments:", getMissing());
    console.log("Passed Students:", getPassed());
    console.log("Students Requiring Revision:", getRevision());
    console.log("Average Score:", getAverage());
    console.log("Highest Score:", getHighest());
    console.log("Lowest Score:", getLowest());
}

printReport();