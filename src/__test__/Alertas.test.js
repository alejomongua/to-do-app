import '@babel/polyfill'
import React from 'react';
import Alertas from '../components/Alertas'
import { render, renderer, screen } from '../testHelpers/reduxUtils'
import _initialState from '../testHelpers/initialState'
import '@testing-library/jest-dom'

it("renders without crashing", () => {
  render(<Alertas />)
})

it('matches snapshot', () => {
  const tree = renderer
    .create(<Alertas />)
    .toJSON();
  expect(tree).toMatchSnapshot()
})

it('shows alerts', () => {
  const textoAlerta = 'Esto es un mensaje de alerta'
  const initialState = { ..._initialState }
  initialState.alertas = [{
    type: 'error',
    text: textoAlerta
  }]

  render(<Alertas />, { initialState })

  screen.debug()

  const tree = renderer
    .create(<Alertas />, { initialState })
    .toJSON();
  expect(tree).toMatchSnapshot()

  expect(screen.getByText(textoAlerta)).toBeInTheDocument()
})