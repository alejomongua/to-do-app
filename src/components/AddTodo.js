import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../redux/actions'

const AddTodo = ({dispatch}) => {
  let input
  
  function onSubmit (event) {
    event.preventDefault()
    if (!input.value.trim()){
      return
    }

    dispatch(addTodo(input.value))
    input.value = ''
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input ref={node => {input = node}}/>
        <button type='submit'>Agregar tarea</button>
      </form>
    </div>
  )
}

export default connect()(AddTodo)
