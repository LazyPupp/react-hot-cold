import React from 'react';
import {shallow, mount} from 'enzyme';
import TopNav from './top-nav';

describe('Testing Top Nav',function(){
  it('Smoke Test Top Nav', function(){
    shallow(<TopNav />);
  });

  it('Testing if Top Nav has What?',function(){
    const wrapper = shallow(<TopNav />);
    const whatElement = wrapper.find('.what');
    expect(whatElement.length).toEqual(1);
    expect(whatElement.text()).toEqual('What?');
  });

  it('Testing if Top Nav has New Game',function(){
    const wrapper = shallow(<TopNav />);
    const newElement = wrapper.find('.new');
    expect(newElement.length).toEqual(1);
    expect(newElement.text()).toEqual('+ New Game');
  });

  it('Testing onInfo function to be called',function(){
    const callback = jest.fn();
    const wrapper = mount(<TopNav onInfo={callback}/>);
    wrapper.find('.what').simulate('click');
    expect(callback).toHaveBeenCalled();
  });

  it('Testing onInfo function to not be called',function(){
    const callback = jest.fn();
    const wrapper = mount(<TopNav onInfo={callback}/>);
    wrapper.find('.new').simulate('click');
    expect(callback).not.toHaveBeenCalled();   
  });

  it('Testing onNewGame function to be called',function(){
    const callback = jest.fn();
    const wrapper = mount(<TopNav onNewGame={callback}/>);
    wrapper.find('.new').simulate('click');
    expect(callback).toHaveBeenCalled();
  });

  it('Testing onNewGame function to not be called',function(){
    const callback = jest.fn();
    const wrapper = mount(<TopNav onNewGame={callback}/>);
    wrapper.find('.what').simulate('click');
    expect(callback).not.toHaveBeenCalled();   
  });
  
})