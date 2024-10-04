const Utils = {
    calculateNumber: function (type, a, b) {
        if (type === 'SUM') {
            return Math.round(a) + Math.round(b);
        } else if (type === 'SUBTRACT') {
            return Math.round(a) - Math.round(b);
        } else {
            return Math.round(a) / Math.round(b);
        }
    }
}

module.exports = Utils
