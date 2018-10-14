import React from 'react';
import ReactDOM from 'react-dom';
import InputForm from './inputForm';
import {StudentLife, AnywhereCard, LiquidCard} from './unit.js'
import { shallow } from 'enzyme';

describe('Input Form', () => {
  it('has default state of three available cards', () => {
    let wrapper = shallow(<InputForm cards={[StudentLife, AnywhereCard, LiquidCard]}/>);
    expect(wrapper.state('availableCards').length).toEqual(3)
  });
  it('has default state of student(true) and highIncome(true)', () => {
    let wrapper = shallow(<InputForm cards={[StudentLife, AnywhereCard, LiquidCard]}/>);
    expect(wrapper.state('student')).toEqual(true)
    expect(wrapper.state('highIncome')).toEqual(true)
  });
})

// describe('Student Button', () => {
//   it('renders with a yes and a no button', () => {
//     let wrapper = shallow(<InputForm cards={[StudentLife, AnywhereCard, LiquidCard]}/>);
//     expect(wrapper.find('#isStudent').length).toEqual(1);
//     expect(wrapper.find('#isNotStudent').length).toEqual(1)
//   })
//   it('clicking `Yes` will change state of student to true', () => {
//     let wrapper = shallow(<InputForm cards={[StudentLife, AnywhereCard, LiquidCard]}/>);
//     wrapper.find('#isStudent').simulate('change', {target: {checked: true}})
//     expect(wrapper.state('student')).toEqual(true)
//   });
//   it('clicking `No will change state of student back to false`', () => {
//     let wrapper = shallow(<InputForm cards={[StudentLife, AnywhereCard, LiquidCard]}/>);
//     // wrapper.find('#isStudent').simulate('check')
//     console.log(wrapper.find('#isNotStudent'))
//     wrapper.find('#isNotStudent').simulate('change', { target: { checked: true } })
//     expect(wrapper.state('student')).toEqual(false)
//   })
// })
// 
// describe('Income Button', () => {
//   it('renders with a high and low income button', () => {
//     let wrapper = shallow(<InputForm cards={[StudentLife, AnywhereCard, LiquidCard]}/>);
//     expect(wrapper.find('#highIncome').length).toEqual(1);
//     expect(wrapper.find('#lowIncome').length).toEqual(1)
//   })
//   it('clicking `No` will change state of highIncome to false', () => {
//     let wrapper = shallow(<InputForm cards={[StudentLife, AnywhereCard, LiquidCard]}/>);
//     wrapper.find('#lowIncome').simulate('click')
//     expect(wrapper.state('highIncome')).toEqual(false)
//   });
//   it('clicking `Yes will change state of highIncome back to true`', () => {
//     let wrapper = shallow(<InputForm cards={[StudentLife, AnywhereCard, LiquidCard]}/>);
//     wrapper.find('#lowIncome').simulate('click')
//     wrapper.find('#highIncome').simulate('click')
//     expect(wrapper.state('highIncome')).toEqual(true)
//   })
// })

describe('#returnCards', () => {
  it('availableCards is changed to [StudentLife, AnywhereCard] when this.state{student: true, highIncome: false}', () => {
    let wrapper = shallow(<InputForm cards={[StudentLife, AnywhereCard, LiquidCard]}/>);
    wrapper.setState({student: true, highIncome: false})
    wrapper.instance().returnCards()
    expect(wrapper.state('availableCards')).toEqual([StudentLife, AnywhereCard])
  })
  it('availableCards is changed to [AnywhereCard] if {student: false, highIncome: false}]', () => {
    let wrapper = shallow(<InputForm cards={[StudentLife, AnywhereCard, LiquidCard]}/>);
    wrapper.setState({student: false, highIncome: false})
    wrapper.instance().returnCards()
    expect(wrapper.state('availableCards')).toEqual([AnywhereCard])
  })
  it('availableCards is changed to [AnywhereCard, LiquidCard] if {student: false, highIncome: true}]', () => {
    let wrapper = shallow(<InputForm cards={[StudentLife, AnywhereCard, LiquidCard]}/>);
    wrapper.setState({student: false, highIncome: true})
    wrapper.instance().returnCards()
    expect(wrapper.state('availableCards')).toEqual([AnywhereCard, LiquidCard])
  })
  it('availableCards is changed to [StudentLife, AnywhereCard, LiquidCard] if {student: true, highIncome: true}]', () => {
    let wrapper = shallow(<InputForm cards={[StudentLife, AnywhereCard, LiquidCard]}/>);
    wrapper.setState({student: true, highIncome: true})
    wrapper.instance().returnCards()
    expect(wrapper.state('availableCards')).toEqual([StudentLife, AnywhereCard, LiquidCard])
  })
})

describe('#generateCards', () => {
  it('should return an HTML element for each card in availableCards', () => {
    let wrapper = shallow(<InputForm cards={[StudentLife, AnywhereCard, LiquidCard]}/>);
    expect(wrapper.instance().generateCards().length).toEqual(3)
  })
  it('should only return one HTML element if availableCards has one card', () => {
    let wrapper = shallow(<InputForm cards={[StudentLife, AnywhereCard, LiquidCard]}/>);
    wrapper.setState({availableCards: [StudentLife]})
    expect(wrapper.instance().generateCards().length).toEqual(1)
  })
})

describe('#generateTotalCredit', () => {
  it('should update state {totalCredit}', () => {
    let wrapper = shallow(<InputForm cards={[StudentLife, AnywhereCard, LiquidCard]}/>);
    wrapper.instance().generateTotalCredit()
    expect(wrapper.state('totalCredit')).toEqual(4500)
  })
})

// describe('Available Cards', () => {
//   it('should default with a header and all three cards', () => {
//     let wrapper = shallow(<InputForm cards={[StudentLife, AnywhereCard, LiquidCard]}/>);
//     expect(wrapper.find('.AvailableCards').containsAllMatchingElements(['Available Cards', 'Student Life', 'Anywhere Card', 'Liquid Card'])).toEqual(true)
//   })
//   it('should return all three cards if this.state({student: true, highIncome: true})', () => {
//     let wrapper = shallow(<InputForm cards={[StudentLife, AnywhereCard, LiquidCard]}/>);
//     wrapper.setState({student: true, highIncome: true})
//     expect(wrapper.find('.AvailableCards').containsAllMatchingElements(['Available Cards', 'Student Life', 'Anywhere Card', 'Liquid Card'])).toEqual(true)
//   })
//   it('should not return Liquid Card if this.state({student: true, highIncome: false})', () => {
//     let wrapper = shallow(<InputForm cards={[StudentLife, AnywhereCard, LiquidCard]}/>);
//     wrapper.setState({student: true, highIncome: false})
//     console.log(wrapper.find('.AvailableCards').text())
//     console.log(wrapper.state('availableCards'))
//     expect(wrapper.find('.AvailableCards').containsMatchingElement('Liquid Card')).toEqual(false)
//   })
// })
