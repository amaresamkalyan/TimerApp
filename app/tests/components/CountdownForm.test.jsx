var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');


var CountdownForm = require('CountdownForm');

describe('CountdownForm', () => {
    it('Should Exist', () => {
        expect(CountdownForm).toExist();
    });
    it('Should call onSetCountdown if valid seconds entered', () => {
        var spy = expect.createSpy();
        var countdownForm = TestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy} />);
        var $el = $(ReactDOM.findDOMNode(countdownForm));
        countdownForm.refs.seconds.value = '109';
        TestUtils.Simulate.submit($el.find('form')[0]);

        expect(spy).toHaveBeenCalledWith(109);
    });
    it('Should NOT call onSetCountdown if valid seconds entered', () => {
        var spy = expect.createSpy();
        var countdownForm = TestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy} />);
        var $el = $(ReactDOM.findDOMNode(countdownForm));
        countdownForm.refs.seconds.value = '109x';
        TestUtils.Simulate.submit($el.find('form')[0]);

        expect(spy).toNotHaveBeenCalled();
    });
    // describe('render', () => {
    //     it('Should render clock to o/p', () => {
    //         var clock = TestUtils.renderIntoDocument(<Clock totalSeconds={62} />);
    //         var $el = $(ReactDOM.findDOMNode(clock));
    //         var actualText = $el.find('.clock-text').text();

    //         expect(actualText).toBe('00:01:02');
    //     });
    // });
    // describe('formatSeconds', () => {
    //     it('Should formatSeconds', () => {
    //         var clock = TestUtils.renderIntoDocument(<Clock />);
    //         var seconds = 615;
    //         var expected = '00:10:15';
    //         var actual = clock.formatSeconds(seconds);

    //         expect(actual).toBe(expected);
    //     });
    //     it('Should formatSeconds to 01:01', () => {
    //         var clock = TestUtils.renderIntoDocument(<Clock />);
    //         var seconds = 61;
    //         var expected = '00:01:01';
    //         var actual = clock.formatSeconds(seconds);

    //         expect(actual).toBe(expected);
    //     });
    // });
});

