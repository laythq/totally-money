import React, { Component } from 'react';
import logo from './logo.svg';
import './inputForm.css';
import {Card, CardList, StudentLife, AnywhereCard, LiquidCard} from './unit.js'

class InputForm extends Component {
  constructor(props) {
    super(props);
    this.props = {
      cardList: 
    }
    this.state = {
      availableCards: [StudentLife, AnywhereCard, LiquidCard],
      student: false,
      highIncome: true
    }
  }

  setStudentStatus(bool) {
    this.setState({student: bool})
  }

  setIncomeStatus(bool) {
    this.setState({highIncome: bool})
  }

  generateCards() {
    return this.state.availableCards.map((card) => <div key={card.name}>{card.name}</div>)
  }

  returnCards() {
    console.log(CardList.returnCards())
  }

  render() {
    return (
      <div className="Credit Check ">
        <div className="Student" >
        <h1>Are you a Student?</h1>
          <button onClick={() => this.setStudentStatus(true)} id="isStudent"> Yes </button>
          <button onClick={() => this.setStudentStatus(false)} id="isNotStudent"> No </button>
        </div>
        <div className="Income">
        <h1> Is your income over $16,000? </h1>
          <button onClick={() => this.setIncomeStatus(true)} id="highIncome"> Yes </button>
          <button onClick={() => this.setIncomeStatus(false)} id="lowIncome"> No </button>
        </div>
        <div className="AvailableCards">
        <h1>Available Cards</h1>
        {this.generateCards()}
        </div>
      </div>
    );
  }
}

export default InputForm;
