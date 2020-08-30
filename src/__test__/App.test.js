import '@babel/polyfill'
import React from 'react';
import App from '../components/App'
import { render, renderer } from '../testHelpers/reduxUtils'

it("renders without crashing", () => {
  render(<App />)
})

it('matches snapshot', () => {
  const tree = renderer
    .create(<App />)
    .toJSON();
  expect(tree).toMatchSnapshot()
})
