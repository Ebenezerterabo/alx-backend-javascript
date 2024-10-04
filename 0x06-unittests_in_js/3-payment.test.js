const sinon = require('sinon');
const chai = require('chai');
const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', function () {
    it('should call Utils.calculateNumber with the correct arguments', function () {
        const consoleLogSpy = sinon.spy(Utils, 'calculateNumber');
        sendPaymentRequestToApi(100, 20);
        chai.expect(consoleLogSpy.calledWith('SUM', 100, 20)).to.be.true;
        consoleLogSpy.restore();
    });
});
