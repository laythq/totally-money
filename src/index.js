import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import InputForm from './inputForm';
import * as serviceWorker from './serviceWorker';
import availableCards from './availableCards.json'
// import { StudentLife, AnywhereCard, LiquidCard} from './unit.js'

ReactDOM.render(<InputForm cards={availableCards}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
