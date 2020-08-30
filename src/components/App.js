import React from 'react'
import { Provider } from 'react-redux'

import Footer from './Footer'
import AddTodo from './AddTodo'
import Alertas from './Alertas'
import VisibleTodoList from './VisibleTodoList'
import store from '../redux/store'

export default function App() {
  return (
    <Provider store={store}>
      <div className='container mx-auto bg-gray-200 py-8 px-4'>
        <div>
          <Alertas />
          <h1 className='font-semibold text-4xl'>Mi lista de tareas</h1>
          <AddTodo />
          <VisibleTodoList />
          <Footer />
        </div>
      </div>
    </Provider>
  )
}
