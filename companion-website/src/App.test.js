import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders download book link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Download book/i);
  expect(linkElement).toBeInTheDocument();
});
