import { connect } from 'react-redux'
import { updateTodo, VisibilityFilters, getListTodo } from '../redux/actions'
import TodoList from './TodoList'
import store from '../redux/store'

function getVisibleTodos(todos, filter) {
  const todoList = todos.list.map(t => ({...todos.byId[t], key: t}))
  switch (filter) {
    case VisibilityFilters.SHOW_COMPLETED:
      return todoList.filter(t => t.completed)
    case VisibilityFilters.SHOW_ACTIVE:
      return todoList.filter(t => !t.completed)
    case VisibilityFilters.SHOW_ALL:
      return todoList
  }
}

function mapStateToProps(state) {
  return {
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
  }
}

const mapDispatchToProps = dispatch => ({
  onTodoClick (id) {
    const state = store.getState()
    const tarea = state.todos.byId[id]
    tarea.completed = !tarea.completed
    dispatch(updateTodo({ id, nuevosValores: tarea}))
  },
  onMount () {
    dispatch(getListTodo())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
