function calculateTotal(items) {
    let total = 0;
    items.forEach(item => {
        total += item.price;
    });
    return total;
}

function processPayment(paymentDetails) {
    console.log("DEBUG: Processing payment for ", paymentDetails.userId); // Left in debugging
    // simulate payment logic
    return { success: true, transactionId: "TXN-" + Math.random().toString(36).substr(2, 9) };
}

module.exports = { calculateTotal, processPayment };
// Urgent weekend fix 13
// Urgent weekend fix 15
// Urgent weekend fix 17
