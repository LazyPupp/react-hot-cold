import React from 'react';
import {shallow, mount} from 'enzyme';

import Game from './game';

describe('Game', function() {
  it('smoke test', function() {
    shallow(<Game />);
  });

  it('should have header, guess section, guess count, and guess list sections', function() {
    const wrapper = shallow(<Game />);
    expect(wrapper.find('Header').length).toEqual(1);
    expect(wrapper.find('GuessSection').length).toEqual(1);
    expect(wrapper.find('GuessCount').length).toEqual(1);
    expect(wrapper.find('GuessList').length).toEqual(1);
  });

  it('should run newGame and reset state with correct answer between 1 and 100 inclusive', function() {
    const wrapper = shallow(<Game />);
    wrapper.instance().newGame();
    expect(wrapper.state('guesses').length).toEqual(0);
    expect(wrapper.state('feedback')).toEqual('Make your guess!');
    expect(typeof wrapper.state('correctAnswer')).toEqual('number');
    expect(wrapper.state('correctAnswer')).toBeLessThan(101);
    expect(wrapper.state('correctAnswer')).toBeGreaterThan(0);
  });

  it('should run guess function with correct number and set winning feedback', function() {
    const wrapper = shallow(<Game />);
    const correctAnswer = wrapper.state('correctAnswer');
    wrapper.instance().guess(correctAnswer);
    expect(wrapper.state('feedback')).toEqual('You got it!');
  });

  it('should run guess function and set feedback for hot', function() {
    const wrapper = shallow(<Game />);
    const correctAnswer = wrapper.state('correctAnswer');

    for(let i = 1; i <= 9; i++) {
      wrapper.instance().guess(correctAnswer + i);
      expect(wrapper.state('feedback')).toEqual('You\'re Hot!');
    }
  });

  it('should run guess function and set feedback for warm', function() {
    const wrapper = shallow(<Game />);
    const correctAnswer = wrapper.state('correctAnswer');

    for(let i = 10; i <= 29; i++) {
      wrapper.instance().guess(correctAnswer + i);
      expect(wrapper.state('feedback')).toEqual('You\'re Warm');
    }
  });

  it('should run guess function and set feedback for cold', function() {
    const wrapper = shallow(<Game />);
    const correctAnswer = wrapper.state('correctAnswer');

    for(let i = 30; i <= 49; i++) {
      wrapper.instance().guess(correctAnswer + i);
      expect(wrapper.state('feedback')).toEqual('You\'re Cold...');
    }
  });

  it('should run guess function and set feedback for ICE cold', function() {
    const wrapper = shallow(<Game />);
    const correctAnswer = wrapper.state('correctAnswer');

    for(let i = 50; i<= 100; i++) {
      wrapper.instance().guess(correctAnswer + i);
      expect(wrapper.state('feedback')).toEqual('You\'re Ice Cold...');
    }
  });

  it('should return NaN if submitted number is not a number', function() {
    const wrapper = shallow(<Game />);
    wrapper.instance().guess('KyleJamie');
    expect(wrapper.state('feedback')).toEqual('Please enter a valid number');
  });


})