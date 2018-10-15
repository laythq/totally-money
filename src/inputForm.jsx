import React, { Component } from 'react';
import './inputForm.css';
import {CardList} from './unit.js'
import { Card } from './card.jsx'

class InputForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      availableCards: props.cards,
      student: true,
      highIncome: true,
      totalCredit: 0,
    }
  }

  setStudentStatus(event) {
    var boolean = (event.target.value === 'true')
    this.setState({student: boolean}, this.returnCards)
  }

  setIncomeStatus(event) {
    var boolean = (event.target.value === 'true')
    this.setState({highIncome: boolean}, this.returnCards)
  }

  generateCards() {
    return this.state.availableCards.map((card) => <Card card={card} onChange={(event) => this.selectCard(event)}/>)
  }

  returnCards() {
    const cardList = new CardList(this.props.cards)
    this.setState({availableCards: cardList.returnCards(this.state.student, this.state.highIncome)})
  }

  selectCard(event) {
    console.log('selected')
    if (event.target.checked) { this.setState({totalCredit: this.state.totalCredit += parseInt(event.target.value) })}
    else { this.setState({totalCredit: this.state.totalCredit -= parseInt(event.target.value)})}
  }

  render() {
    return (
      <div className="wrapper">
        <div className="UserInput">
          <div className="Student">
            <h1>Are you a Student?</h1>
              <div onChange={event => this.setStudentStatus(event)} >
                <label className="radio">
                  <input type="radio" defaultChecked name="student" id="isStudent" value={true} />Yes
                </label>
                <label className="radio">
                  <input type="radio" name="student" id="isNotStudent" value={false} />No
                </label>
              </div>
          </div>
          <div className="Income">
            <h1>Is your income over £16,000?</h1>
              <div onChange={event => this.setIncomeStatus(event)} >
                <label className="radio">
                  <input type="radio" defaultChecked name="income" id="highIncome" value={true} />Yes
                </label>
                <label className="radio">
                  <input type="radio" name="income" id="lowIncome" value={false} />No
                </label>
              </div>
            </div>
          </div>
        <div className="AvailableCards">
        <h1>Available Cards</h1>
        <p>(Hover to Select)</p>
        {this.generateCards()}
        </div>
        <div className="TotalAvailableCredit">
        <h1>Total Available Credit</h1>
        <p>£{this.state.totalCredit}</p>
        </div>
      </div>
    );
  }
}

export default InputForm;
