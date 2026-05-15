function validateToken(token) {
    if (!token) return false;
    // dummy validation
    return token === "secret-token";
}

function getUserById(userId) {
    return { id: userId, name: "Test User" };
}

module.exports = { validateToken, getUserById };
// johns feature change 1
// johns feature change 2
