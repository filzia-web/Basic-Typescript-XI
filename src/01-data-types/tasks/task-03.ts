/**
 * SMK Telkom Malang is developing a new Student Information System. 
 * Before students can use the system, the administrator must record each student's basic information. 
 * Every student has a unique student ID, a full name, an age, and a status indicating whether they are currently an active student.
 * 
 * Task:
 * 1. Define a proper type for the student information.
 * 2. Implement a type that you defined on 3 students data.
 * 
 * display the student data using console.log.
 */

type Student = {
        studentId: string;
        fullName: string;
        age: number;
        activeStudent: boolean;
}

const student1: Student = {
    studentId: "ST001",
    fullName: "Farishta Almira",
    age: 16,
    activeStudent: true,
};

const student2: Student = {
    studentId: "ST002",
    fullName: "Faza Najma",
    age: 17,
    activeStudent: true,
};

const student3: Student = {
    studentId: "ST003",
    fullName: "Ficka Putri",
    age: 17,
    activeStudent: false,
};

console.log("Student 1:", student1);
console.log("Student 2:", student2);
console.log("Student 3:", student3);