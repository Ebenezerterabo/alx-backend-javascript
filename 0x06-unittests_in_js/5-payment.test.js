const sinon = require('sinon');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./5-payment');

describe('sendPaymentRequestToApi', function () {
    const consoleLogSpy = sinon.spy(console, 'log');

    beforeEach(() => {
        consoleLogSpy.resetHistory();
    });

    afterEach(() => {
        expect(consoleLogSpy.calledOnce).to.be.true;
    });

    function verifyOutput(totalAmount, totalShipping) {
        sendPaymentRequestToApi(totalAmount, totalShipping);
        expect(consoleLogSpy.calledOnce).to.be.true;
        expect(consoleLogSpy.getCall(0).args[0]).to.match(/The total is: \d+/);
    }

    it('should display the correct message for a large payment', () => {
        verifyOutput(100, 20);
    });

    it('should display the correct message for a small payment', () => {
        verifyOutput(10, 10);
    });
});
