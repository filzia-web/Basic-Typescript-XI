/**
 * An airline automatically determines a passenger's check-in status.
 * Business Rules
 * Step 1
 * If the passenger has not checked in online, display:
 * "Please complete online check-in first.""
 * 
 * Otherwise, continue.
 * Step 2
 * If baggage weight exceeds 20 kg:
 * - Business Class → Extra baggage allowed.
 * - Economy Class → Additional baggage fee required.
 * 
 * Otherwise:
 * Proceed to boarding pass printing.
 * 
 * Passenger Information
 * | Information     | Value         |
 * | --------------- | ------------- |
 * | Passenger       | Fajar Nugroho |
 * | Online Check-in | Yes           |
 * | Cabin Class     | Economy       |
 * | Baggage Weight  | 24 kg         |
 * 
 * Student Tasks
 * 1. Declare all variables.
 * 2. Implement the airline decision process.
 * 3. Display the correct message.
 */

let passenger: string = "Fajar Nugroho";
let onlineCheckIn: boolean = true;
let cabinClass: string = "Economy";
let baggageWeight: number = 24;

if(!onlineCheckIn) {
        console.log("Please complete online check-in first.");
    } 
    if(baggageWeight >= 20) {
        console.log("Business Class → Extra baggage allowed.");
    } else {
        console.log("Economy Class → Additional baggage fee required.")
    }
