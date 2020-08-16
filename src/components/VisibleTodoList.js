import { connect } from 'react-redux'
import { toggleTodo, VisibilityFilters } from '../redux/actions'
import TodoList from './TodoList'

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
  onTodoClick(id) {
    dispatch(toggleTodo(id))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
