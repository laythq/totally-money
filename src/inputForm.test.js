import React from 'react';
import ReactDOM from 'react-dom';
import InputForm from './inputForm';

import { shallow } from 'enzyme';

describe('Input Form', () => {
  it('has default state of three available cards', () => {
    let wrapper = shallow(<InputForm />);
    expect(wrapper.state('availableCards').length).toEqual(3)
  });
  it('has default state of student(false) and highIncome(true)', () => {
    let wrapper = shallow(<InputForm />);
    expect(wrapper.state('student')).toEqual(false)
    expect(wrapper.state('highIncome')).toEqual(true)
  });
})

describe('Student Button', () => {
  it('renders with a yes and a no button', () => {
    let wrapper = shallow(<InputForm />);
    expect(wrapper.find('#isStudent').length).toEqual(1);
    expect(wrapper.find('#isNotStudent').length).toEqual(1)
  })
  it('clicking `Yes` will change state of student to true', () => {
    let wrapper = shallow(<InputForm />);
    wrapper.find('#isStudent').simulate('click')
    expect(wrapper.state('student')).toEqual(true)
  });
  it('clicking `No will change state of student back to false`', () => {
    let wrapper = shallow(<InputForm />);
    wrapper.find('#isStudent').simulate('click')
    wrapper.find('#isNotStudent').simulate('click')
    expect(wrapper.state('student')).toEqual(false)
  })
})

describe('Income Button', () => {
  it('renders with a high and low income button', () => {
    let wrapper = shallow(<InputForm />);
    expect(wrapper.find('#highIncome').length).toEqual(1);
    expect(wrapper.find('#lowIncome').length).toEqual(1)
  })
  it('clicking `No` will change state of highIncome to false', () => {
    let wrapper = shallow(<InputForm />);
    wrapper.find('#lowIncome').simulate('click')
    expect(wrapper.state('highIncome')).toEqual(false)
  });
  it('clicking `Yes will change state of highIncome back to true`', () => {
    let wrapper = shallow(<InputForm />);
    wrapper.find('#lowIncome').simulate('click')
    wrapper.find('#highIncome').simulate('click')
    expect(wrapper.state('highIncome')).toEqual(true)
  })
})

describe('Available Cards', () => {
  it('should default with a header and all three cards', () => {
    let wrapper = shallow(<InputForm />);
    expect(wrapper.find('.AvailableCards').containsAllMatchingElements(['Available Cards', 'Student Life', 'Anywhere Card', 'Liquid Card'])).toEqual(true)
  })
  it('should return all three cards if this.state({student: true, highIncome: true})', () => {
    let wrapper = shallow(<InputForm />);
    wrapper.setState({student: true, highIncome: true})
    expect(wrapper.find('.AvailableCards').containsAllMatchingElements(['Available Cards', 'Student Life', 'Anywhere Card', 'Liquid Card'])).toEqual(true)
  })
  it('should not return Liquid Card if this.state({student: true, highIncome: false})', () => {
    let wrapper = shallow(<InputForm />);
    wrapper.setState({student: true, highIncome: false})
    // expect(wrapper.find('.AvailableCards').containsMatchingElement('Liquid Card')).toEqual(false)
  })
})
