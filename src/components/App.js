import React from 'react'
import Footer from './Footer'
import AddTodo from './AddTodo'
import VisibleTodoList from './VisibleTodoList'

export default function App() {
  return (
    <div className='container mx-auto bg-gray-200 py-8 px-4'>
      <div>
        <h1 className='font-semibold text-4xl'>Mi lista de tareas</h1>
        <AddTodo />
        <VisibleTodoList />
        <Footer />
      </div>
    </div>
  )
}
