import '@babel/polyfill'
import React from 'react';
import App from '../components/App'
import { render } from '@testing-library/react';

it("renders without crashing", () => {
  render(<App />);
});