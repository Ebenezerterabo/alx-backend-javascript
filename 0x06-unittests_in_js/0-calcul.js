/* Function to calculate number */
function calculateNumber(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error('parameters must be numbers');
    }
    const sum = Math.round(a) + Math.round(b);
    return (sum);
}

module.exports = calculateNumber;
