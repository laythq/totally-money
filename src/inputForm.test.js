import React from 'react';
import InputForm from './inputForm';
import availableCards from './availableCards.json'
import { shallow } from 'enzyme';

describe('Input Form', () => {
  it('has default state of three available cards', () => {
    let wrapper = shallow(<InputForm cards={availableCards}/>);
    expect(wrapper.state('availableCards').length).toEqual(3)
  });
  it('has default state of student(true) and highIncome(true)', () => {
    let wrapper = shallow(<InputForm cards={availableCards}/>);
    expect(wrapper.state('student')).toEqual(true)
    expect(wrapper.state('highIncome')).toEqual(true)
  });
})


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

describe('#setStudentStatus', () => {
  it('updates the state of `student` to false if if event.value is false', () => {
    let wrapper = shallow(<InputForm cards={availableCards}/>);
    const mockEvent = {target: {value: 'false'}}
    wrapper.instance().setStudentStatus(mockEvent)
    expect(wrapper.state('student')).toEqual(false)
  })
  it('updates the state of `student` to true if if event.value is true', () => {
    let wrapper = shallow(<InputForm cards={availableCards}/>);
    const mockEvent = {target: {value: 'true'}}
    wrapper.setState({student: false})
    wrapper.instance().setStudentStatus(mockEvent)
    expect(wrapper.state('student')).toEqual(true)
  })
})

describe('#setIncomeStatus', () => {
  it('updates the state of `highIncome` to false if if event.value is false', () => {
    let wrapper = shallow(<InputForm cards={availableCards}/>);
    const mockEvent = {target: {value: 'false'}}
    wrapper.instance().setIncomeStatus(mockEvent)
    expect(wrapper.state('highIncome')).toEqual(false)
  })
  it('updates the state of `highIncome` to true if if event.value is true', () => {
    let wrapper = shallow(<InputForm cards={availableCards}/>);
    const mockEvent = {target: {value: 'true'}}
    wrapper.setState({highIncome: false})
    wrapper.instance().setIncomeStatus(mockEvent)
    expect(wrapper.state('highIncome')).toEqual(true)
  })
})

describe('#returnCards', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallow(<InputForm cards={availableCards}/>);
  })
  it('availableCards is changed to [StudentLife, AnywhereCard] when this.state{student: true, highIncome: false}', () => {
    wrapper.setState({student: true, highIncome: false})
    wrapper.instance().returnCards()
    expect(wrapper.state('availableCards').map((card) => card['name'])).toEqual(['Student Life', 'Anywhere Card'])
  })
  it('availableCards is changed to [AnywhereCard] if {student: false, highIncome: false}]', () => {
    wrapper.setState({student: false, highIncome: false})
    wrapper.instance().returnCards()
    expect(wrapper.state('availableCards').map((card) => card['name'])).toEqual(['Anywhere Card'])
  })
  it('availableCards is changed to [AnywhereCard, LiquidCard] if {student: false, highIncome: true}]', () => {
    wrapper.setState({student: false, highIncome: true})
    wrapper.instance().returnCards()
    expect(wrapper.state('availableCards').map((card) => card['name'])).toEqual(['Anywhere Card', 'Liquid Card'])
  })
  it('availableCards is changed to [StudentLife, AnywhereCard, LiquidCard] if {student: true, highIncome: true}]', () => {
    wrapper.setState({student: true, highIncome: true})
    wrapper.instance().returnCards()
    expect(wrapper.state('availableCards').map((card) => card['name'])).toEqual(['Student Life', 'Anywhere Card', 'Liquid Card'])
  })
})

describe('#generateCards', () => {
  it('should return an HTML element for each card in availableCards', () => {
    let wrapper = shallow(<InputForm cards={availableCards}/>);
    expect(wrapper.instance().generateCards().length).toEqual(3)
  })
  it('should only return one HTML element if availableCards has one card', () => {
    let wrapper = shallow(<InputForm cards={availableCards}/>);
    wrapper.setState({availableCards: [{"name": "Student Life"}]})
    expect(wrapper.instance().generateCards().length).toEqual(1)
  })
})

describe('#selectCard', () => {
  it('should increase total credit by the event value if checkbox is checked', () => {
    let wrapper = shallow(<InputForm cards={availableCards}/>);
    const mockEvent = {target: {value: '1000', checked: true}}
    wrapper.instance().selectCard(mockEvent)
    expect(wrapper.state('totalCredit')).toEqual(1000)
  })

  it('should decrease total credit by the event value if checkbox is unchecked', () => {
    let wrapper = shallow(<InputForm cards={availableCards}/>);
    const mockEvent = {target: {value: '1000', checked: false}}
    wrapper.instance().selectCard(mockEvent)
    expect(wrapper.state('totalCredit')).toEqual(-1000)
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
