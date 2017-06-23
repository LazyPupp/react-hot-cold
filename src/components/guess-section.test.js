import React from 'react';
import {shallow, mount} from 'enzyme';
import GuessSection from './guess-section';

describe('Guess Section', function () {
  it('Smoke test', function() {
    shallow(<GuessSection />);
  });

  it('it has an h2 for feedback and GuessForm section', function() {
    const feedback = 'this is only a test';
    const wrapper = shallow(<GuessSection feedback={feedback}/>);
    expect(wrapper.contains(<h2 id="feedback">{feedback}</h2>)).toEqual(true);
    expect(wrapper.find('GuessForm').length).toEqual(1);
  });

})

