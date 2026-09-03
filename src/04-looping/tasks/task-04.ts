/**
 * An online store wants to analyze today's sales transactions. 
 * Each transaction amount is stored in an array.
 * ---------------------------------
 * const sales = [
 * 125000,
 * 350000,
 * 78000,
 * 910000,
 * 150000,
 * 420000,
 * 275000,
 * 99000,
 * 640000,
 * 18000
 * ]
 * -------------------------------------
 * 
 * Student task in calculate:
 * 1. Total sales revenue
 * 2. Highest transaction
 * 3. Lowest transaction
 * 4. Number of transactions worth Rp300,000 or more
 * 5. Average transaction value
 */

const sales = [
 125000,
 350000,
 78000,
 910000,
 150000,
 420000,
 275000,
 99000,
 640000,
 18000
 ];

let total = 0;
let highest = sales[0];
let lowest = sales[0];
let transactionWorth = 0;

for (const sale of sales) {
    total += sale;

    if (sale > highest) {
        highest = sale;
    }
    if (sale < lowest) {
        lowest = sale;
    }
    if (sale >= 300000) {
        transactionWorth++;
    }
}

const average = total/sales.length;

console.log("Total Sales Revenue:Rp.", total);
console.log("Highest Transaction:Rp.", highest);
console.log("Lowest Transaction:Rp.", lowest);
console.log("Transaction Worth: ", transactionWorth);
console.log("Average Transaction:Rp.", average);