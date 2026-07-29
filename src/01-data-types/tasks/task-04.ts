/**
 * 
 * The school library is building a digital catalog to help students search for books. 
 * Every book must store its ISBN number, title, author's name, total number of pages, 
 * book category, and whether the book is currently available for borrowing.
 * 
 * Task:
 * 1. Define a proper type for the book information.
 * 2. Implement a type that you defined on 3 books data.
 * 
 * display the book data using console.log.
 */

type Book = {
    ISBN: string;
    title: string;
    author: string;
    totalPages: number;
    bookCategory: string;
    available: boolean;
};

const book1: Book = {
    ISBN: "978-602-1234-01",
    title: "Bumi",
    author: "Tere Liye",
    totalPages: 440,
    bookCategory: "fantasy",
    available: true,
};
const book2: Book = {
    ISBN: "978-602-1234-02",
    title: "Laskar Pelangi",
    author: "Andrea Hirata",
    totalPages: 529,
    bookCategory: "novel", 
    available: false,
};
const book3: Book = {
    ISBN: "978-602-1234-03",
    title: "Math for Beginners",
    author: "Siti Rahma",
    totalPages: 100,
    bookCategory: "Education",
    available: true,
};

console.log("Book 1:", book1);
console.log("Book 2:", book2);
console.log("Book 3:", book3);
