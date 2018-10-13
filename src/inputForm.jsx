import React, { Component } from 'react';
import logo from './logo.svg';
import './inputForm.css';
import {Card, CardList, StudentLife, AnywhereCard, LiquidCard} from './unit.js'

class InputForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      availableCards: [StudentLife, AnywhereCard, LiquidCard]
    }

  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
        </header>
      </div>
    );
  }
}

export default InputForm;
