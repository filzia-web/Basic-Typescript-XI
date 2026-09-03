/**
 * An internet café charges customers Rp8,000 per hour. 
 * Customers are billed for every started hour. If the total playing time exceeds 5 hours, they receive a 15% discount.
 * Today, a customer used a computer for:
 * 7 hours and 35 minutes
 * 
 * 
 * You need to determine:
 * - Total playing time in minutes
 * - Remaining minutes after full hours
 * - Total billed hours
 * - Total payment before discount
 * - Discount amount
 * - Final payment
 */

const hours = 7;
const minutes = 35;
const pricePerHour = 8000;

function totalMinutes() {
    return hours * 60 + minutes;
}

function billedHours() {
    return Math.ceil(totalMinutes() / 60);
}

function paymentBeforeDiscount() {
    return billedHours() * pricePerHour;
}

function discount() {
    return billedHours() > 5 ? paymentBeforeDiscount() * 0.15 : 0;
}

function finalPayment() {
    return paymentBeforeDiscount() - discount();
}

console.log("Total Playing Time:", totalMinutes(), "minutes");
console.log("Remaining Minutes:", minutes);
console.log("Total Billed Hours:", billedHours());
console.log("Payment Before Discount:", paymentBeforeDiscount());
console.log("Discount:", discount());
console.log("Final Payment:", finalPayment());