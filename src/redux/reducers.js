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
    case actions.UPDATE_TODO_SUCCESS:
      byId = { ...state.byId }
      Object.assign(byId[action.payload.id], action.payload.cambios)
      return Object.assign({}, state, { byId })
    case actions.GET_LIST_TODO_SUCCESS:
      const newState = {
        list: [],
        byId: {},
      }
      action.payload.docs.forEach(tarea => {
        newState.list.push(tarea.id)
        newState.byId[tarea.id] = tarea.data()
      })
      return newState
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
      if (!(state).some((alert) => alert.text === action.payload.text)) {
        return [
          ...state,
          { ...action.payload }
        ] 
      } else {
        return state
      }
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
