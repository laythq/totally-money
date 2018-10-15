import React, { Component } from 'react';
import logo from './logo.svg';
import './inputForm.css';
import './card.css'
import {Card, CardList, StudentLife, AnywhereCard, LiquidCard} from './unit.js'

class InputForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      availableCards: props.cards,
      student: true,
      highIncome: true,
      totalCredit: 0,
    }

    this.returnCards = this.returnCards.bind(this)
  }

  setStudentStatus(event) {
    var boolean = (event.target.value == 'true')
    console.log(boolean)
    this.setState({student: boolean}, this.returnCards)

  }

  setIncomeStatus(event) {
    var boolean = (event.target.value == 'true')
    this.setState({highIncome: boolean}, this.returnCards)
  }

  generateCards() {
    return this.state.availableCards.map((card) => <div key={card['name']} class="card">
                                                      <div class="side">
                                                        <p class="title">{card['name']}</p>
                                                        <p class="apr">APR: <strong>{card['apr']}%</strong></p>
                                                        <p class="b-t">Balance Transfer Offer Duration: <strong>{card['Balance Transfer Offer Duration']} months</strong></p>
                                                        <p class="purchase">Purchase Offer Duration: <strong>{card['Purchase Offer Duration']} months</strong></p>
                                                        <p class="credit">Credit Available: <strong>£{card['Credit Available']}</strong></p>
                                                      </div>
                                                      <div class="side back">
                                                        <p>{card['Description']}</p>
                                                        <p>Select: <input type="checkbox" name={card['name']} value={card['Credit Available']} onChange={event => this.selectCard(event)}/></p>
                                                      </div>
                                                    </div>)
  }

  returnCards() {
    const cardList = new CardList(this.props.cards)
    this.setState({availableCards: cardList.returnCards(this.state.student, this.state.highIncome)}, this.generateTotalCredit)
  }

  selectCard(event) {
    if (event.target.checked) { this.setState({totalCredit: this.state.totalCredit += parseInt(event.target.value) })}
    else { this.setState({totalCredit: this.state.totalCredit -= parseInt(event.target.value)})}
  }

  generateTotalCredit() {
    const cardList = new CardList(this.props.cards)
    this.setState({totalCredit: cardList.availableCredit(this.state.selectedCards)})
  }

  render() {
    return (
      <div className="wrapper">
        <div className="UserInput">
          <div className="Student">
            <h1>Are you a Student?</h1>
              <div onChange={event => this.setStudentStatus(event)} >
                <label class="radio">
                  <input type="radio" defaultChecked name="student" id="isStudent" value={true} />Yes
                </label>
                <label class="radio">
                  <input type="radio" name="student" id="isNotStudent" value={false} />No
                </label>
              </div>
          </div>
          <div className="Income">
            <h1>Is your income over £16,000?</h1>
              <div onChange={event => this.setIncomeStatus(event)} >
                <label class="radio">
                  <input type="radio" defaultChecked name="income" id="highIncome" value={true} />Yes
                </label>
                <label class="radio">
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
