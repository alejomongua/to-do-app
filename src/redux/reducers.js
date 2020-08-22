import { combineReducers } from 'redux'
import * as actions from './actions'

function todos(state = {list: [], byId: {}}, action) {
  let byId
  switch (action.type) {
    case actions.ADD_TODO_SUCCESS:
      byId = {...state.byId}
      byId[action.payload.key] = {
        text: action.payload.text,
        completed: false
      }
      return {
        list: [
          ...state.list,
          action.payload.key
        ],
        byId
      }
    case actions.TOGGLE_TODO_SUCCESS:
      byId = {...state.byId}
      byId[action.payload].completed = !byId[action.payload].completed
      return Object.assign({}, state, { byId })

    default:
      return state
  }
}

function visibilityFilter(state = actions.VisibilityFilters.SHOW_ALL, action) {
  switch (action.type) {
    case actions.SET_VISIBILITY_FILTER:
      return action.filter
    default:
      return state
  }
}

function alertas(state = [], action) {
  switch (action.type) {
    case actions.ADD_ALERT:
      return [
        ...state,
        { ...action.payload }
      ] 
    case actions.REMOVE_ALERT:
      return state.filter((alerta) => alerta.text == action.payload)
    default:
      return state
  }

}

const todoApp = combineReducers({
  visibilityFilter,
  todos,
  alertas,
})

/* Lo anterior es equivalente a: 
function todoApp(state = {}, action) {
  return {
    visibilityFilter: visibilityFilter(state.visibilityFilter, action),
    todos: todos(state.todos, action)
  }
}
*/

export default todoApp
