// test-utils.js
import React from 'react'
import { render as rtlRender } from '@testing-library/react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import renderer from 'react-test-renderer'
import reducer from '../redux/reducers'
import _initialState from './initialState'

const create = renderer.create

delete renderer.create

renderer.create = function (
  ui,
  {
    initialState = _initialState
  } = {}
) {
  return create(<Provider store={createStore(reducer, initialState)}>{ui}</Provider>)
}

function render(
  ui,
  {
    initialState = _initialState
  } = {}
) {
  function Wrapper({ children }) {
    return <Provider store={createStore(reducer, initialState)}>{children}</Provider>
  }
  return rtlRender(ui, { wrapper: Wrapper })
}

// re-export everything
export * from '@testing-library/react'
// override render method
export { render }
export { renderer }