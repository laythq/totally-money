import React from 'react';
import ReactDOM from 'react-dom';
import InputForm from './inputForm';

import { shallow } from 'enzyme';

it('renders without crashing', () => {
  shallow(<InputForm />);
});
