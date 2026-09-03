/**
 * A company has a simple data-processing engine used to analyze transaction records.
 */

const transactions = [
    {
        id: "TRX001",
        customer: "Alya",
        amount: 850000,
        status: "paid"
    },
    {
        id: "TRX002",
        customer: "Budi",
        amount: 1250000,
        status: "pending"
    },
    {
        id: "TRX003",
        customer: "Citra",
        amount: 450000,
        status: "paid"
    },
    {
        id: "TRX004",
        customer: "Dimas",
        amount: 2100000,
        status: "paid"
    },
    {
        id: "TRX005",
        customer: "Eka",
        amount: 780000,
        status: "cancelled"
    }
];

/** TASKS:
 * - Extract customer's name only in array
 * - Determine Transaction Category with rules below:
 *   - ≥ Rp2,000,000 → HIGH VALUE
 *   - ≥ Rp1,000,000 → MEDIUM VALUE
 *   - < Rp1,000,000 → LOW VALUE
 * - Calculate platform fee:
 *   - Paid transactions → 2%
 *   - Pending transactions → 1%
 *   - Cancelled transactions → 0%
 */

// mengambil nama customer
function getCustomerNames() {
    const names: string[] = [];

    for (const transaction of transactions) {
        names.push(transaction.customer);
    }

    return names;
}

// menentukan kategori transaksi
function getTransactionCategory(amount: number) {
    if (amount >= 2000000) {
        return "HIGH VALUE";
    } else if (amount >= 1000000) {
        return "MEDIUM VALUE";
    } else {
        return "LOW VALUE";
    }
}

// menghitung biaya platform
function calculatePlatformFee(amount: number, status: string) {
    if (status === "paid") {
        return amount * 0.02;
    } else if (status === "pending") {
        return amount * 0.01;
    } else {
        return 0;
    }
}

console.log("Customer Names:", getCustomerNames());

for (const transaction of transactions) {
    console.log(
        transaction.id,
        transaction.customer,
        getTransactionCategory(transaction.amount),
        calculatePlatformFee(transaction.amount, transaction.status)
    );
}