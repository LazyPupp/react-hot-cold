import React from 'react';
import {shallow, mount} from 'enzyme';

import GuessForm from './guess-form';

describe('Guess Form', function() {
  it('smoke test', function() {
    shallow(<GuessForm />);
  });

  it('should have a label for entering your guess', function() {
    const wrapper = shallow(<GuessForm />);
    expect(wrapper.contains(<label htmlFor="userGuess">Enter your Guess</label>)).toEqual(true);
  });

  it('should have two input fields', function() {
    const wrapper = shallow(<GuessForm />);
    expect(wrapper.find('input').length).toEqual(2);
  });

  it('should have one input field with id of userGuess and one with id of guessButton', function() {
    const wrapper = shallow(<GuessForm />);
    expect(wrapper.find('#userGuess').length).toEqual(1);
    expect(wrapper.find('#guessButton').length).toEqual(1);
  });

  it('should run the onGuess function when there is a submission', function() {
    const callback = jest.fn();
    const wrapper = mount(<GuessForm onGuess={callback} />);
    const value = '5';
    wrapper.find('input[id="userGuess"]').node.value = value;
    wrapper.find('form').simulate('submit');
    expect(callback).toHaveBeenCalledWith(value);
  });


})//end of describe block