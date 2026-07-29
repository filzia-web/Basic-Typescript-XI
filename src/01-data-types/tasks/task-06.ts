/**
 * An online marketplace sells thousands of products every day. 
 * To display complete product information, the system stores a product code, product name, selling price, 
 * stock quantity, product weight, average customer rating, and whether the product is currently discounted.
 * 
 * Task:
 * 1. Define a proper type for the product information.
 * 2. Implement a type that you defined on 3 products data.
 * 
 * display the product data using console.log.
 */

type Product = {
    productCode: string;
    productName: string;
    sellingPrice: number;
    stokQuantity: number;
    productWeight: number;
    averageRating: number;
    isDiscounted: boolean;
};

const product1: Product = {
    productCode: "PRO001",
    productName: "Wireless Mouse",
    sellingPrice: 175000,
    stokQuantity: 40,
    productWeight: 0.09,
    averageRating: 4.7,
    isDiscounted: false,
};
const product2: Product = {
    productCode: "PRO002",
    productName: "Keyboard",
    sellingPrice: 350000,
    stokQuantity: 30,
    productWeight: 0.75,
    averageRating: 4.8,
    isDiscounted: true,
};
const product3: Product = {
    productCode: "PRO003",
    productName: "Headset Cable",
    sellingPrice: 150000,
    stokQuantity: 55,
    productWeight:0.15,
    averageRating: 4.0,
    isDiscounted: true,
};

console.log("Product 1:", product1);
console.log("Product 2:", product2);
console.log("Product 3:", product3);