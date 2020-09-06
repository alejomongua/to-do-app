import '@babel/polyfill'
import React from 'react';
import App from '../components/App'
import AddTodo from '../components/AddTodo'
import { render, renderer, fireEvent, screen, waitFor } from '../testHelpers/reduxUtils'

it("renders without crashing", () => {
  render(<App />)
  // screen.debug()
})

it('matches snapshot', () => {
  const tree = renderer
    .create(<App />)
    .toJSON();
  expect(tree).toMatchSnapshot()
})

it('does nothing when input is blank', () => {
  const { getByRole, getAllByRole } = render(<App />)
  const tareas = getAllByRole('listitem').length
  const button = getByRole('button', { name: /agregar/i })
  fireEvent(button,   new MouseEvent('click', {
    bubbles: true,
    cancelable: true,
  }))
  expect(getAllByRole('listitem').length).toEqual(tareas)
})

it('does nothing when input is not blank', () => {
  const { getByRole, getAllByRole } = render(<App />)
  const tareas = getAllByRole('listitem').length
  const button = getByRole('button', { name: /agregar/i })
  fireEvent(button,   new MouseEvent('click', {
    bubbles: true,
    cancelable: true,
  }))
  expect(getAllByRole('listitem').length).toEqual(tareas)
})

it('Cleans the input when button is pressed', () => {
  const { getByRole, getAllByRole } = render(<App />)
  const input = getByRole('textbox')
  const tareas = getAllByRole('listitem').length
  const button = getByRole('button', { name: /agregar/i })
  fireEvent.change(input, { target: { value: 'Nueva tarea' } })
  expect(input.value).toBe('Nueva tarea')
  fireEvent(button,   new MouseEvent('click', {
    bubbles: true,
    cancelable: true,
  }))
  expect(input.value).toBe('')
})

it('Creates a new task', async () => {
  const { getByRole, getAllByRole } = render(<App />)
  const input = getByRole('textbox')
  const tareas = getAllByRole('listitem').length
  const button = getByRole('button', { name: /agregar/i })
  fireEvent.change(input, { target: { value: 'Nueva tarea' } })
  fireEvent(button,   new MouseEvent('click', {
    bubbles: true,
    cancelable: true,
  }))
  await waitFor(() => expect(getAllByRole('listitem').length).toBeGreaterThan(tareas))
})
