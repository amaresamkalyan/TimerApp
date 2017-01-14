var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Countdown = require('Countdown');

describe('Countdown', () => {
    it('Should Exist', () => {
        expect(Countdown).toExist();
    });

    describe('handleSetCountdown', () => {
        it('Sould set State to started and countdown', (done) => {
            var countdown = TestUtils.renderIntoDocument(<Countdown />);
            countdown.handleSetCountdown(10);

            expect(countdown.state.count).toBe(10);
            expect(countdown.state.countdownStatus).toBe('started');

            setTimeout(() => {
                expect(countdown.state.count).toBe(9);
                done();
            }, 1001);
        });

        it('Sould set State to started and countdown > 0', (done) => {
            var countdown = TestUtils.renderIntoDocument(<Countdown />);
            countdown.handleSetCountdown(2);

            setTimeout(() => {
                expect(countdown.state.count).toBe(0);
                done();
            }, 4000);
        });
    });
});

