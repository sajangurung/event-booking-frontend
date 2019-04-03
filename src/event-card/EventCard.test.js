import React from 'react';
import ReactDOM from 'react-dom';
import EventCard from './EventCard';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<EventCard />, div);
  ReactDOM.unmountComponentAtNode(div);
});
