// test-utils.js
import React from 'react'
import { render as rtlRender } from '@testing-library/react'
import { Provider } from 'react-redux'
import renderer from 'react-test-renderer'
import _initialState from './initialState'
import store from '../redux/store'

const create = renderer.create

delete renderer.create

renderer.create = function (
  ui
) {
  return create(<Provider store={store}>{ui}</Provider>)
}

function render(
  ui
) {
  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>
  }
  return rtlRender(ui, { wrapper: Wrapper })
}

// re-export everything
export * from '@testing-library/react'
// override render method
export { render }
export { renderer }