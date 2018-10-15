import React, { Component } from 'react';

import './styles/app.css';
import { CardList } from './cardList';
import { Card } from './card';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      availableCards: props.cards,
      student: true,
      highIncome: true,
      totalCredit: 0,
      checkedCards: [],
    };
  };

  setStudentStatus(event) {
    const boolean = (event.target.value === 'true');
    this.setState({
      student: boolean,
      totalCredit: 0,
      checkedCards: [],
    }, this.returnCards);
  };

  setIncomeStatus(event) {
    const boolean = (event.target.value === 'true');
    this.setState({
      highIncome: boolean,
      totalCredit: 0,
      checkedCards: [],
    }, this.returnCards);
  };

  generateCards() {
    const checkedCards = this.state.checkedCards;
    return this.state.availableCards.map(card => (
      <Card
        card={card}
        checked={checkedCards.includes(card.name)}
        onChange={event => this.selectCard(
          card.name,
          event.target.checked,
        )}
      />
    ));
  };

  returnCards() {
    const cardList = new CardList(this.props.cards);
    this.setState({
      availableCards: cardList.returnCards(
        this.state.student, this.state.highIncome,
      )
    });
  };

  selectCard(cardName, checked) {
    const checkedCards = Object.create(this.state.checkedCards);
    if (checked) {
      if (!checkedCards.includes(cardName)) {
        checkedCards.push(cardName);
      }
    } else {
      const idx = checkedCards.indexOf(cardName);
      if (idx !== -1) {
        checkedCards.splice(idx, 1);
      }
    }

    this.setState({ checkedCards });
  }

  render() {
    const checked = this.state.checkedCards;
    const available = this.props.cards;
    const totalCredit = available.reduce((total, card) => {
      if (checked.includes(card.name)){
        return total + card["Credit Available"];
      }
      return total;
    }, 0);

    return (
        <div className="wrapper">
          <div className="UserInput">
            <div className="Student">
              <h2>Are you a Student?</h2>
              <div onChange={event => this.setStudentStatus(event)}>
                <label className="radio">
                  <input
                    type="radio"
                    defaultChecked
                    name="student"
                    id="isStudent"
                    value={true}
                  />
                  Yes
                </label>
                <label className="radio">
                  <input
                    type="radio"
                    name="student"
                    id="isNotStudent"
                    value={false}
                  />
                  No
                </label>
              </div>
            </div>
            <div className="Income">
              <h2>Is your income over £16,000?</h2>
              <div onChange={event => this.setIncomeStatus(event)}>
                <label className="radio">
                  <input
                    type="radio"
                    defaultChecked
                    name="income"
                    id="highIncome"
                    value={true}
                  />
                  Yes
                </label>
                <label className="radio">
                  <input
                    type="radio"
                    name="income"
                    id="lowIncome"
                    value={false}
                  />
                  No
                </label>
              </div>
            </div>
          </div>
          <div className="AvailableCards">
            <h2>Available Cards</h2>
            <p>(Hover to Select)</p>
            {this.generateCards()}
          </div>
          <div className="TotalAvailableCredit">
            <h2>Total Available Credit</h2>
            <p>
            £
              {totalCredit}
            </p>
          </div>
        </div>
    );
  }
}

export default App;
