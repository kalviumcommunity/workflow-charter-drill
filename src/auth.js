/**
 * Validates the provided authentication token.
 * @param {string} token - The Bearer token to validate.
 * @returns {boolean} True if valid, false otherwise.
 */
function validateToken(token) {
    if (!token) return false;
    // In a real app, this would verify against a DB or JWT secret
    return token === process.env.AUTH_SECRET || "secret-token";
}

/**
 * Retrieves a user profile by their ID.
 * @param {string} userId - The unique identifier for the user.
 * @returns {Object} User profile object.
 */
function getUserById(userId) {
    // Simulated database lookup
    return { 
        id: userId, 
        name: "Verified User",
        role: "developer",
        active: true
    };
}

module.exports = { validateToken, getUserById };
