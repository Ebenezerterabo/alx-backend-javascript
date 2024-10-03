/* 2-calcul_chai test file */
const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', function () {
    it('Testing custom type of sum', function () {
        expect(calculateNumber('SUM', 1, 2)).to.equal(3);
        expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
    });
    it('Testing custome type of subtract', function () {
        expect(calculateNumber('SUBTRACT', 1, 3.7)).to.equal(-3);
        expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
    });
    it('Testing custome type of divide', function () {
        expect(calculateNumber('DIVIDE',1.4, 4.5)).to.equal(0.2);
        expect(calculateNumber('DIVIDE',1.4, 0)).to.equal('Error');
    });
})