/**
 * An online store is processing a customer's shopping cart.
 * The customer purchased:
 * 
 * | Product             |  Price | Quantity |
 * | ------------------- | -----: | -------: |
 * | Mechanical Keyboard | 850000 |        1 |
 * | Wireless Mouse      | 275000 |        2 |
 * | Mouse Pad           | 120000 |        1 |
 * 
 * Business Rules:
 * - Customers receive 10% discount if the total purchase exceeds Rp1,000,000.
 * - Only Premium members receive free shipping.
 * - Every purchased product increases the total item counter.
 * 
 * Additional Information: Current customer is Premium member.
 * 
 * Task:
 *  - Calculate subtotal.
 *  - Count the total purchased items using an increment operator.
 *  - Determine whether a discount should be applied.
 *  - Calculate the final payment.

 */

// Product Information
const keyboardPrice: number = 850000;
const keyboardQuantity: number = 1;

const mousePrice: number = 275000;
const mouseQuantity: number = 2;

const mousePadPrice: number = 120000;
const mousePadQuantity: number = 1;

// Customer Information
const premiumMember: boolean = true;

// Calculate subtotal
const subtotal: number =
    (keyboardPrice * keyboardQuantity) +
    (mousePrice * mouseQuantity) +
    (mousePadPrice * mousePadQuantity);

// Count total items
let totalItems: number = 0;

for (let i = 0; i < keyboardQuantity; i++) {
    totalItems++;
}

for (let i = 0; i < mouseQuantity; i++) {
    totalItems++;
}

for (let i = 0; i < mousePadQuantity; i++) {
    totalItems++;
}

// Determine discount
const discount: number = 
 subtotal > 1000000 ? subtotal * 0.10 : 0;

// Calculate final payment
const finalPayment = subtotal - discount;

// Free shipping
const freeShipping = premiumMember;

// Display result
console.log("===== Shopping Cart Summary =====");
console.log("Subtotal:", subtotal);
console.log("Total Items:", totalItems);
console.log("Discount:", discount);
console.log("Final Payment:", finalPayment);
console.log("Free Shipping:", freeShipping);