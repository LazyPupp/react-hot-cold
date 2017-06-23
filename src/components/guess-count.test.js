import React from 'react';
import {shallow,mount} from 'enzyme';
import GuessCount from './guess-count';

describe('Testing Guess Count',function(){
  it('Smoke Test',function(){
    shallow(<GuessCount />);
  });

  it('Testing if it contains the p element',function(){
    const count = 1;
    const wrapper = shallow(<GuessCount count={count}/>);
    expect(wrapper.contains( 
        <p>
            Guess #<span id="count">{count}</span>!
        </p>)).toEqual(true);
  });

  it('Testing if the count is working',function(){
    const count = Math.random();
    const wrapper = shallow(<GuessCount count={count}/>);
    expect(wrapper.contains( 
        <p>
            Guess #<span id="count">{count}</span>!
        </p>)).toEqual(true);
  });
});