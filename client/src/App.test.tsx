import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('should render App and child component', () => {
  render(<App />);
  const rootDiv = screen.getByTestId(/app-root/i);
  expect(rootDiv).toBeInTheDocument();
});
