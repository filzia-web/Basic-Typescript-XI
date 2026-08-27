/**
 * An online learning platform allows students to register for programming courses. 
 * Every registration stores information about both the student and the selected course. 
 * Student information includes student ID, full name, and grade level. 
 * Course information includes the course ID, course title, instructor name, 
 * and total learning hours. Finally, the registration also records the registration date and whether the payment has been completed.
 * 
 * Task:
 * 1. Define a proper type for the registration information.
 * 2. Implement a type that you defined on 3 registration data.
 * 
 * display the registration data using console.log.
 */

type Registration = {
    studentID: string;
    fullName: string;
    gradeLevel: number;

    courseID: string;
    courseTitle: string;
    instructorName: string;
    totalLearningHours: number;

    registrationDate: string;
    paymentComplete: boolean;
}

const registration1: Registration = {
    studentID: "ST001",
    fullName: "Alice Gracia",
    gradeLevel: 11,

    courseID: "CS100",
    courseTitle: "Basic Typescript",
    instructorName: "Mr. David",
    totalLearningHours: 45,

    registrationDate: "8-5-2026",
    paymentComplete: true,
};

const registration2: Registration = {
    studentID: "ST002",
    fullName: "Olivia Richardo",
    gradeLevel: 12,

    courseID: "CS101",
    courseTitle: "Math for Beginner",
    instructorName: "Mr. Leo",
    totalLearningHours: 40,

    registrationDate: "8-5-2026",
    paymentComplete: false,
};

const registration3: Registration = {
    studentID: "ST003",
    fullName: "Joe Leo",
    gradeLevel: 10,

    courseID: "CS102",
    courseTitle: "Python Progamming",
    instructorName: "Mrs. Pasha",
    totalLearningHours: 40,

    registrationDate: "8-5-2026",
    paymentComplete: true,
};

console.log("Registration 1: ", registration1);
console.log("Registration 2: ", registration2);
console.log("Registration 3: ", registration3);
