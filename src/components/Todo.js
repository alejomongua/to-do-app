import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

const Todo = ({ onClick, completed, text }) => {
    return (
      <li
        onClick={onClick}
        className={`text-lg p-3 m-1 ${completed ? 'line-through bg-red-300 hover:bg-red-200' : 'bg-green-300 hover:bg-green-200' }`}>
        {completed && <FontAwesomeIcon icon={faCheck} className='mx-2 text-green-400' />}
        {text}
      </li>
    )
}

Todo.propTypes = {
  onClick: PropTypes.func,
  completed: PropTypes.bool,
  text: PropTypes.string,
}

export default Todo
