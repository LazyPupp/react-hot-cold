import React from 'react';
import {shallow, mount} from 'enzyme';

import GuessList from './guess-list';

describe('Guess List', function() {
const seedGuessList = [];

  beforeAll(() => {
    for(let i = 1; i <= 5; i++) {
      seedGuessList.push(i);
    }
  });
  
  it('Smoke test', function() {
    shallow(<GuessList guesses={seedGuessList}/>);
  });

  it('should contain ul', function() {
    const wrapper = shallow(<GuessList guesses={seedGuessList}/>);
    expect(wrapper.find('ul').length).toEqual(1);
  });

  it('should contain correct number of li', function() {
    const wrapper = shallow(<GuessList guesses={seedGuessList}/>);
    expect(wrapper.find('li').length).toEqual(5);
  });

  it('should contain correct values in guess list', function() {
    const wrapper = shallow(<GuessList guesses={seedGuessList}/>);
    wrapper.find('li').forEach((node, index) => {
      expect(node.text()).toEqual((index + 1).toString());
    });
  });  

})