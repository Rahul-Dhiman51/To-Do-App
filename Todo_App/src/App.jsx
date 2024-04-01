import { useState } from 'react'
import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {
  return (
    <>
      <div className="text-4xl font-bold text-center">To-Do App</div>
      <AddTodo />
      <Todos />
    </>
  )
}

export default App
