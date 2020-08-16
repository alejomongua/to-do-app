import { combineReducers } from 'redux'
import {
  ADD_TODO,
  TOGGLE_TODO,
  SET_VISIBILITY_FILTER,
  VisibilityFilters
} from './actions'

function todos(state = {list: [], byId: {}}, action) {
  let byId
  switch (action.type) {
    case ADD_TODO:
      byId = {...state.byId}
      byId[action.id] = {
        text: action.text,
        completed: false
      }
      return {
        list: [
          ...state.list,
          action.id
        ],
        byId
      }
    case TOGGLE_TODO:
      byId = {...state.byId}
      byId[action.id].completed = !byId[action.id].completed
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

const todoApp = combineReducers({
  visibilityFilter,
  todos
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
