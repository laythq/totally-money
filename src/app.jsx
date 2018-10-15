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
    };
  };

  setStudentStatus(event) {
    const boolean = (event.target.value === 'true');
    this.setState({ student: boolean }, this.returnCards);
  };

  setIncomeStatus(event) {
    const boolean = (event.target.value === 'true');
    this.setState({ highIncome: boolean }, this.returnCards);
  };

  generateCards() {
    return this.state.availableCards.map(card => <Card
      card={card} onChange={event => this.selectCard(event)} />);
  };

  returnCards() {
    const cardList = new CardList(this.props.cards);
    this.setState({
      availableCards: cardList.returnCards(
        this.state.student, this.state.highIncome,
      )
    });
  };

  selectCard(event) {
    if (event.target.checked) {
      this.setState({
        totalCredit:
        this.state.totalCredit += parseInt(event.target.value),
      });
    } else {
      this.setState({
        totalCredit:
        this.state.totalCredit -= parseInt(event.target.value),
      });
    }
  }

  render() {
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
                    value
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
                    value
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
              {this.state.totalCredit}
            </p>
          </div>
        </div>
    );
  }
}

export default App;
