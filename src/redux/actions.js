import { v4 as uuidv4 } from 'uuid'

export const ADD_TODO = 'add_todo'

export const REMOVE_TODO = 'delete_todo'

export const TOGGLE_TODO = 'toggle_todo'

export const SET_VISIBILITY_FILTER = 'set_visibility_filter'

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}
  
/*
  * action creators
  */

export function addTodo(text) {
  return {
    type: ADD_TODO,
    id: uuidv4(),
    text
  }
}

export function toggleTodo(id) {
  return { type: TOGGLE_TODO, id }
}

export function setVisibilityFilter(filter) {
  return { type: SET_VISIBILITY_FILTER, filter }
}

