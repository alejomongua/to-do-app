import '@babel/polyfill'
import React from 'react';
import Alertas from '../components/Alertas'
import { render, renderer, screen } from '../testHelpers/reduxUtils'
import _initialState from '../testHelpers/initialState'
import '@testing-library/jest-dom'
// Quitar estos imports cuando se pueda generar una alarma a través de la interfaz
import { addAlert } from '../../src/redux/actions'
import store from '../../src/redux/store'
import TestRenderer from 'react-test-renderer'

const { act } = TestRenderer

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
  const alerta = {
    type: 'error',
    text: textoAlerta
  }

  // To do: Hacer algo que genere una alerta, cambiar esta línea que sigue:
  act(() => {
    store.dispatch(addAlert(alerta))
  })

  render(<Alertas />)

  const tree = renderer
    .create(<Alertas />)
    .toJSON();
  expect(tree).toMatchSnapshot()

  expect(screen.getByText(textoAlerta)).toBeInTheDocument()
})