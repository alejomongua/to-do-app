import '@babel/polyfill'
import React from 'react';
import AddTodo from '../components/AddTodo'
import { render, renderer } from '../testHelpers/reduxUtils'
import '@testing-library/jest-dom'

it('matches snapshot', () => {
  const tree = renderer
    .create(<AddTodo />)
    .toJSON();
  expect(tree).toMatchSnapshot()
})

it('has a button to add to do', () => {
  const { getByRole } = render(<AddTodo />)
  getByRole('button', { name: /agregar/i })
})

it('has an input to add to do', () => {
  const { getByRole } = render(<AddTodo />)
  getByRole('textbox')
})
