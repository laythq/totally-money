import React from 'react';
import ReactDOM from 'react-dom';
import InputForm from './inputForm';
import {StudentLife, AnywhereCard, LiquidCard} from './unit.js'
import { shallow } from 'enzyme';


describe('User Stories:', () => {
  it('user clicks isStudent button and highIncome button, returning all three cards and 4500 available credit', () => {
    let wrapper = shallow(<InputForm cards={[StudentLife, AnywhereCard, LiquidCard]}/>);
    wrapper.find('#isStudent').simulate('click')
    wrapper.find('#highIncome').simulate('click')
    expect(wrapper.find('.AvailableCards').containsAllMatchingElements(['Available Cards', 'Student Life', 'Anywhere Card', 'Liquid Card'])).toEqual(true)
    expect(wrapper.find('.TotalAvailableCredit').contains(['Available Credit: ', 4500])).toEqual(true)
  })
  it('user clicks isNotStudent button and highIncome button, returning Anywhere Card and Liquid Card and 4500 available credit', () => {
    let wrapper = shallow(<InputForm cards={[StudentLife, AnywhereCard, LiquidCard]}/>);
    wrapper.find('#isNotStudent').simulate('click')
    wrapper.find('#highIncome').simulate('click')
    expect(wrapper.find('.AvailableCards').containsAllMatchingElements(['Available Cards', 'Anywhere Card', 'Liquid Card'])).toEqual(true)
    console.log(wrapper.find('.TotalAvailableCredit').text())
    expect(wrapper.find('.TotalAvailableCredit').contains(['Available Credit: ', 3300])).toEqual(true)
  })
  it('user clicks isNotStudent button and lowIncome button, returning Anywhere Card and 300 available credit', () => {
    let wrapper = shallow(<InputForm cards={[StudentLife, AnywhereCard, LiquidCard]}/>);
    wrapper.find('#isNotStudent').simulate('click')
    wrapper.find('#lowIncome').simulate('click')
    expect(wrapper.find('.AvailableCards').containsAllMatchingElements(['Available Cards', 'Anywhere Card'])).toEqual(true)
    console.log(wrapper.find('.TotalAvailableCredit').text())
    expect(wrapper.find('.TotalAvailableCredit').contains(['Available Credit: ', 300])).toEqual(true)
  })
  it('user clicks isStudent button and lowIncome button, returning Anywhere Card and 1500 available credit', () => {
    let wrapper = shallow(<InputForm cards={[StudentLife, AnywhereCard, LiquidCard]}/>);
    wrapper.find('#isStudent').simulate('click')
    wrapper.find('#lowIncome').simulate('click')
    expect(wrapper.find('.AvailableCards').containsAllMatchingElements(['Available Cards', 'Anywhere Card'])).toEqual(true)
    console.log(wrapper.find('.TotalAvailableCredit').text())
    expect(wrapper.find('.TotalAvailableCredit').contains(['Available Credit: ', 1500])).toEqual(true)
  })
})
