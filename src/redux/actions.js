export const ADD_TODO = 'add_todo'
export const ADD_TODO_SUCCESS = 'add_todo_success'
export const REMOVE_TODO = 'delete_todo'
export const REMOVE_TODO_SUCCESS = 'delete_todo_success'
export const TOGGLE_TODO = 'toggle_todo'
export const TOGGLE_TODO_SUCCESS = 'toggle_todo_success'

export const SET_VISIBILITY_FILTER = 'set_visibility_filter'

export const ADD_ALERT = 'add_alert'
export const REMOVE_ALERT = 'delete_alert'

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}
  
/*
 * action creators
 */

export function addTodo(payload) {
  return {
    type: ADD_TODO,
    payload
  }
}

export function addTodoSuccess(payload) {
  return {
    type: ADD_TODO_SUCCESS,
    payload
  }
}

export function toggleTodo(payload) {
  return {
    type: TOGGLE_TODO,
    payload
  }
}

export function toggleTodoSuccess(payload) {
  return {
    type: TOGGLE_TODO_SUCCESS,
    payload
  }
}

export function setVisibilityFilter(filter) {
  return { type: SET_VISIBILITY_FILTER, filter }
}

export function addAlert (payload) {
  return {
    type: ADD_ALERT,
    payload
  }
}

export function removeAlert (payload) {
  return {
    type: REMOVE_ALERT,
    payload
  }
}
