import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../redux/actions'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'

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
    <div className='mb-4'>
      <form onSubmit={onSubmit}>
        <input className='shadow
          appearance-none
          border
          rounded
          py-2
          px-3
          md:w-2/4
          sm:w-full
          text-gray-700
          leading-tight
          focus:outline-none
          focus:shadow-outline
          m-4' ref={node => {input = node}}/>
        <button 
          className='font-bold
            py-2
            px-4
            rounded
            text-gray-900
            bg-gray-400
            hover:bg-gray-600
            md:w-1/4
            sm:w-full
            focus:bg-gray-500'
          type='submit'
          >
          <FontAwesomeIcon icon={faPlusCircle} className='mx-2' />
          Agregar tarea
        </button>
      </form>
    </div>
  )
}

export default connect()(AddTodo)
