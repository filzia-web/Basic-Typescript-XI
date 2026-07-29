/**
 * A software company records daily employee attendance. 
 * Every attendance record stores the employee's ID, employee name, date, check-in time, check-out time, 
 * total working hours, and whether the employee was present on that day.
 * 
 * Task:
 * 1. Define a proper type for the attendance information.
 * 2. Implement a type that you defined on 3 attendance data.
 * 
 * display the attendance data using console.log.
 */

type Attendance = {
    employeesID: string;
    employeeName: string;
    date: string;
    checkinTime: string;
    checkoutTime: string;
    totalHours: number;
    wasPresent: boolean;
};

const attendance1: Attendance = {
    employeesID: "EMP001",
    employeeName: "Farishta Almira",
    date: "7-27-2026",
    checkinTime: "07:15",
    checkoutTime: "18:15",
    totalHours: 11,
    wasPresent: true,
};
const attendance2: Attendance = {
    employeesID: "EMP002",
    employeeName: "Faza Najma",
    date: "7-27-2026",
    checkinTime: "09.00",
    checkoutTime: "15.00",
    totalHours: 6,
    wasPresent: true,
};
const attendance3: Attendance = {
    employeesID: "EMP003",
    employeeName: "Ficka Putri",
    date: "7-27-2026",
    checkinTime: "10.45",
    checkoutTime: "20.45",
    totalHours: 10,
    wasPresent: true,
};

console.log("Attendance 1:", attendance1);
console.log("Attendance 2:", attendance2);
console.log("Attendance 3:", attendance3);