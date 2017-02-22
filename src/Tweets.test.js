import React from 'react';
import ReactDOM from 'react-dom';
import Tweets from './Tweets';

it('renders tweets without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Tweets tweets={[]}/>, div);
});