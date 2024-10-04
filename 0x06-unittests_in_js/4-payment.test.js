const sinon = require('sinon');
const chai = require('chai');
const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', function () {
    it('should call Utils.calculateNumber with the correct arguments', function () {
        const stub = sinon.stub(Utils, 'calculateNumber').returns(10);
        sendPaymentRequestToApi(100, 20);
        chai.expect(stub.calledWith('SUM', 100, 20)).to.be.true;
        chai.expect(stub.getCall(0).returnValue).to.equal(10);
        stub.restore();
    });
});
