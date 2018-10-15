import React from 'react';
import ReactDOM from 'react-dom';
import App from './app.jsx';
import availableCards from './assets/availableCards.json';

ReactDOM.render(<App cards={availableCards} />,
  document.getElementById('root'));
