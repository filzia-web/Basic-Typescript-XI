/**
 * An online learning platform stores course completion information.
 * The academy director wants a dashboard containing:
 * Completion Statistics:
 * - Total enrollments
 * - Completed enrollments
 * - Incomplete enrollments
 * - Completion percentage
 * 
 * Academic Statistics:
 * - Highest score
 * - Lowest score
 * - Average score
 * - Students with passing scores (≥ 75)
 * 
 * Course Statistics:
 * - Number of students enrolled in each course
 * - Average score for each course
 * 
 * Learning Statistics:
 * - Total learning hours
 * - Average learning duration
 * 
 * Student Tasks:
 * You must design your own program architecture.
 * Requirements
 * Your solution must contain:
 * - At least 10 non-void functions
 * - At least 2 void functions
 * - No duplicated calculations
 * - Each function must have one responsibility
 * - Every printed value must come from another function
 * - Use meaningful function names and parameters
 * Reuse existing functions whenever possible
 */

const enrollments = [
    {
        student: "Alya",
        course: "TypeScript",
        completed: true,
        score: 91,
        duration: 38
    },
    {
        student: "Budi",
        course: "TypeScript",
        completed: false,
        score: 45,
        duration: 12
    },
    {
        student: "Citra",
        course: "Database",
        completed: true,
        score: 87,
        duration: 42
    },
    {
        student: "Dimas",
        course: "Backend",
        completed: true,
        score: 96,
        duration: 40
    },
    {
        student: "Eka",
        course: "Database",
        completed: false,
        score: 60,
        duration: 18
    },
    {
        student: "Fajar",
        course: "Backend",
        completed: true,
        score: 82,
        duration: 35
    },
    {
        student: "Gita",
        course: "TypeScript",
        completed: true,
        score: 88,
        duration: 36
    },
    {
        student: "Hana",
        course: "Backend",
        completed: false,
        score: 70,
        duration: 20
    }
];

function getTotalEnrollments() {
    return enrollments.length;
}

function getCompletedEnrollments() {
    let total = 0;

    for (const enrollment of enrollments) {
        if (enrollment.completed) {
            total++;
        }
    }

    return total;
}

function getIncompleteEnrollments() {
    return getTotalEnrollments() - getCompletedEnrollments();
}

function getCompletionPercentage() {
    return (getCompletedEnrollments() / getTotalEnrollments()) * 100;
}

function getHighestScore() {
    let highest = enrollments[0].score;

    for (const enrollment of enrollments) {
        if (enrollment.score > highest) {
            highest = enrollment.score;
        }
    }

    return highest;
}

function getLowestScore() {
    let lowest = enrollments[0].score;

    for (const enrollment of enrollments) {
        if (enrollment.score < lowest) {
            lowest = enrollment.score;
        }
    }

    return lowest;
}

function getAverageScore() {
    let total = 0;

    for (const enrollment of enrollments) {
        total += enrollment.score;
    }

    return total / getTotalEnrollments();
}

function getPassingStudents() {
    let total = 0;

    for (const enrollment of enrollments) {
        if (enrollment.score >= 75) {
            total++;
        }
    }

    return total;
}

function getCourseEnrollments(course: string) {
    let total = 0;

    for (const enrollment of enrollments) {
        if (enrollment.course === course) {
            total++;
        }
    }

    return total;
}

function getCourseAverageScore(course: string) {
    let total = 0;
    let count = 0;

    for (const enrollment of enrollments) {
        if (enrollment.course === course) {
            total += enrollment.score;
            count++;
        }
    }

    return total / count;
}

function getTotalLearningHours() {
    let total = 0;

    for (const enrollment of enrollments) {
        total += enrollment.duration;
    }

    return total;
}

function getAverageLearningDuration() {
    return getTotalLearningHours() / getTotalEnrollments();
}

// function 1
function printCompletionStatistics() {
    console.log("=== COMPLETION STATISTICS ===");
    console.log("Total Enrollments:", getTotalEnrollments());
    console.log("Completed:", getCompletedEnrollments());
    console.log("Incomplete:", getIncompleteEnrollments());
    console.log("Completion Percentage:", getCompletionPercentage() + "%");
}

// function 2
function printAcademicStatistics() {
    console.log("=== ACADEMIC STATISTICS ===");
    console.log("Highest Score:", getHighestScore());
    console.log("Lowest Score:", getLowestScore());
    console.log("Average Score:", getAverageScore());
    console.log("Passing Students:", getPassingStudents());
}

printCompletionStatistics();
printAcademicStatistics();

console.log("=== COURSE STATISTICS ===");
console.log("TypeScript Students:", getCourseEnrollments("TypeScript"));
console.log("TypeScript Average:", getCourseAverageScore("TypeScript"));
console.log("Database Students:", getCourseEnrollments("Database"));
console.log("Database Average:", getCourseAverageScore("Database"));
console.log("Backend Students:", getCourseEnrollments("Backend"));
console.log("Backend Average:", getCourseAverageScore("Backend"));

console.log("=== LEARNING STATISTICS ===");
console.log("Total Learning Hours:", getTotalLearningHours());
console.log("Average Learning Duration:", getAverageLearningDuration());