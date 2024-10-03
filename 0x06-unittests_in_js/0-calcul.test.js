/* test cases for calcul function */
const { it, describe } = require('mocha');
const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', function () {
    it('should return 3 when a=1 and b=2', function () {
        assert.equal(calculateNumber(1, 2), 3);
    });
    it('should return 5 when a=1 and b=3.7', function () {
        assert.equal(calculateNumber(1, 3.7), 5);
    });
    it('should return 5 when a=1.2 and b=3.7', function () {
        assert.equal(calculateNumber(1.2, 3.7), 5);
    });
    it('should return 6 when a=1.5 and b=3.7', function () {
        assert.equal(calculateNumber(1.5, 3.7), 6);
    });
})
