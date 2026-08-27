/**
 * An online marketplace wants to calculate the customer's final payment and reward points after checkout.
 * The customer purchases the following items:
 * | Product             |  Price | Quantity |
 * | ------------------- | -----: | -------: |
 * | Mechanical Keyboard | 850000 |        1 |
 * | Wireless Mouse      | 275000 |        2 |
 * | Monitor Stand       | 420000 |        1 |
 * 
 * Customer Information:
 * | Information       | Value                            |
 * | ----------------- | -------------------------------- |
 * | Voucher Value     | 100000                           |
 * | Premium Member    | Yes                              |
 * | Reward Point Rate | 1 point for every Rp50,000 spent |
 * 
 * Business Rules:
 * - Premium members receive 10% discount.
 * - Voucher is deducted after the membership discount.
 * - Reward points are calculated from the final payment before tax.
 * - VAT is 11%.
 * - Free shipping is available if:
 * - Premium member OR
 * - Final payment before tax exceeds Rp1,500,000.
 * 
 * The checkout system must calculate:
 * - Product subtotal
 * - Membership discount 
 * - Voucher deduction
 * - Payment before tax
 * - VAT
 * - Final payment
 * - Reward points
 * - Free shipping eligibility

 */

const KeyboardPrice: number = 850000;
const KeyboardQuantity: number = 1;

const mousePrice: number = 275000;
const mouseQuantity: number = 2;

const monitorPrice: number = 420000;
const monitorQuantity: number = 1;

const VoucherValue: number = 100000;
const premiumMember: boolean = true;
const rewardPointRate: number = 50000;

const subtotal = 
     (KeyboardPrice*KeyboardQuantity) +
     (mousePrice*mouseQuantity) +
     (monitorPrice*monitorQuantity);

const membershipDiscount: number = premiumMember ? subtotal * 0.10 :0;

const paymentBeforeTax: number = 
    subtotal - membershipDiscount - VoucherValue;

const vat: number = 
    paymentBeforeTax * 0.11;

const finalPayment: number = vat + paymentBeforeTax;

const rewardPoints: number = Math.floor(paymentBeforeTax / rewardPointRate);
const sugarPoint: number = 15;
const quantity: number = 2;
const pointsUsed: number = sugarPoint*quantity;
const reward: string = "sugar";

const freeShippingEligibility: boolean = premiumMember || paymentBeforeTax > 1500000;

console.log("Product Subtotal: Rp.", subtotal);
console.log("Membership Discount: Rp.", membershipDiscount);
console.log("Voucher Deduction: Rp.", VoucherValue);
console.log("Payment Before Tax: Rp.", paymentBeforeTax);
console.log("VAT: Rp.", vat);
console.log("Final Payment: Rp.", finalPayment);
console.log("Reward Points:", rewardPoints);
console.log("Free Shipping Eligibility:", freeShippingEligibility);

if(pointsUsed <= rewardPoints) {
    const remainingPoints: number = rewardPoints - pointsUsed;

    console.log("Reward: ", reward);
    console.log("Quantity: ", quantity);
    console.log("Points Used: ", pointsUsed);
    console.log("Remaining Points:", remainingPoints);
} else {
    console.log("Reward points are not enough.")
}

   
