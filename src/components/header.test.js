import React from 'react';
import {shallow,mount} from 'enzyme';
import Headers from './header';
import TopNav from './top-nav'

describe('Testing headers.js',function(){
  it('Smoke Test',function(){
    shallow(<Headers />);
  });

  it('Testing if there is h1 element',function(){
    const wrapper = shallow(<Headers/>);
    expect(wrapper.contains(<h1>HOT or COLD</h1>)).toEqual(true);
  })
  
  it('Testing Initial Cases',function(){
    const wrapper = shallow(<Headers />);
    expect(wrapper.find('InfoModal').length).toEqual(0);
    expect(wrapper.state('showInfoModal')).toEqual(false);
    expect(wrapper.find('TopNav').length).toEqual(1);
  });

  it('Testing ToggleInfoModal function',function(){
    const wrapper = shallow(<Headers />);
    wrapper.instance().toggleInfoModal();
    expect(wrapper.state('showInfoModal')).toEqual(true);
    expect(wrapper.find('InfoModal').length).toEqual(1);
    expect(wrapper.find('TopNav').length).toEqual(1);
    expect(wrapper.contains(<h1>HOT or COLD</h1>)).toEqual(true);
  });

  it('Testing ToggleInfoModal Function by calling it twice',function(){
    const wrapper = shallow(<Headers />);
    wrapper.instance().toggleInfoModal();
    wrapper.instance().toggleInfoModal();
    expect(wrapper.find('InfoModal').length).toEqual(0);
    expect(wrapper.find('TopNav').length).toEqual(1);
    expect(wrapper.state('showInfoModal')).toEqual(false);
    expect(wrapper.contains(<h1>HOT or COLD</h1>)).toEqual(true);
  });

});