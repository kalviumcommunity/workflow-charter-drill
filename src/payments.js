/**
 * Calculates the total amount for a list of items, applying discounts and tax.
 * @param {Array} items - List of items with price and discount properties.
 * @returns {number} The calculated total.
 */
function calculateTotal(items) {
    const TAX_RATE = 1.05;
    return items.reduce((total, item) => {
        const discountedPrice = item.price - (item.discount || 0);
        return total + (discountedPrice * TAX_RATE);
    }, 0);
}

/**
 * Processes a payment for a user.
 * @param {Object} paymentDetails - Details including userId and amount.
 * @returns {Object} Payment status and transaction ID.
 */
function processPayment(paymentDetails) {
    // Payment logic simulation
    return { 
        success: true, 
        transactionId: `TXN-${Math.random().toString(36).substr(2, 9)}`,
        timestamp: new Date().toISOString()
    };
}

module.exports = { calculateTotal, processPayment };
