import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'

import todoApp from './reducers'
import todoSaga from './sagas'

const sagaMiddleware = createSagaMiddleware()
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(todoApp, /* preloadedState, */ composeEnhancers(
  applyMiddleware(sagaMiddleware)
))
sagaMiddleware.run(todoSaga)

export default store
