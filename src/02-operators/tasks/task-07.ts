/**
 * A hotel calculates a guest's payment based on the following information.
 * | Information          | Value  |
 * | -------------------- | ------ |
 * | Room Price per Night | 650000 |
 * | Nights Stayed        | 4      |
 * | Service Charge       | 120000 |
 * | Tax                  | 11%    |
 * | VIP Member           | Yes    |
 * 
 * Business Rules
 * - VIP guests receive a 12% room discount.
 * - Tax is calculated after the discount.
 * - Service charge is not discounted.
 * - The hotel also offers free breakfast if the guest stays at least 3 nights or is a VIP member.
 * 
 * The system must calculate:
 * - Room subtotal
 * - Discount
 * - Tax
 * - Final payment
 * - Whether the guest is eligible for free breakfast
 */

const roomPrice = 650000;
const nightsStayed = 4;
const serviceCharge = 120000;
const vipMember = true;

function calculateSubtotal() {
    return roomPrice * nightsStayed;
}

function calculateDiscount(subtotal: number) {
    return vipMember ? subtotal * 0.12 : 0;
}

function calculateTax(subtotal: number, discount: number) {
    return (subtotal - discount) * 0.11;
}

function calculateFinalPayment(
    subtotal: number,
    discount: number,
    tax: number
) {
    return subtotal - discount + tax + serviceCharge;
}

function freeBreakfast() {
    return nightsStayed >= 3 || vipMember;
}

const subtotal = calculateSubtotal();
const discount = calculateDiscount(subtotal);
const taxAmount = calculateTax(subtotal, discount);
const finalPayment = calculateFinalPayment(subtotal, discount, taxAmount);

console.log("Room Subtotal:", subtotal);
console.log("Discount:", discount);
console.log("Tax:", taxAmount);
console.log("Final Payment:", finalPayment);
console.log("Free Breakfast:", freeBreakfast());