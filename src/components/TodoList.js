import React from 'react'
import PropTypes from 'prop-types'
import Todo from './Todo'

const TodoList = ({ todos, onTodoClick }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <Todo
          {...todo}
          onClick={() => onTodoClick(todo.key)} />
      ))}
    </ul>
  )
}
/* Dentro de los atributos del componente anterior
    {...todo}
  es equivalente a:
    key={todo.id}
    text={todo.text}
    completed={todo.completed}
*/

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
      key: PropTypes.string,
      text: PropTypes.string,
      completed: PropTypes.bool,
    })
  ),
  onTodoClick: PropTypes.func
}

export default TodoList
