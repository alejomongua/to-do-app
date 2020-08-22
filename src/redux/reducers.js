import { combineReducers } from 'redux'
import {
  ADD_TODO_SUCCESS,
  TOGGLE_TODO,
  SET_VISIBILITY_FILTER,
  VisibilityFilters,
  ADD_ALERT,
  REMOVE_ALERT,
} from './actions'

function todos(state = {list: [], byId: {}}, action) {
  let byId
  switch (action.type) {
    case ADD_TODO_SUCCESS:
      console.log(action)
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
    case TOGGLE_TODO:
      byId = {...state.byId}
      byId[action.key].completed = !byId[action.key].completed
      return Object.assign({}, state, { byId })
    default:
      return state
  }
}

function visibilityFilter(state = VisibilityFilters.SHOW_ALL, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter
    default:
      return state
  }
}

function alertas(state = [], action) {
  switch (action.type) {
    case ADD_ALERT:
      return [
        ...state,
        { ...action.payload }
      ] 
    case REMOVE_ALERT:
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
