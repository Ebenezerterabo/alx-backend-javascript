/* 1-calcul test file */
const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', function () {
    it('Testing custom type of sum', function () {
        assert.equal(calculateNumber('SUM', 1, 2), 3);
        assert.equal(calculateNumber('SUM', 1.4, 4.5), 6);
    });
    it('Testing custome type of subtract', function () {
        assert.equal(calculateNumber('SUBTRACT', 1, 3.7), -3);
        assert.equal(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
    });
    it('Testing custome type of divide', function () {
        assert.equal(calculateNumber('DIVIDE',1.4, 4.5), 0.2);
        assert.equal(calculateNumber('DIVIDE',1.4, 0), 'Error');
    });
})