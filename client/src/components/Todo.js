import React from 'react'
import './todo.css'
import removeTodo from '../actions/removeTodo'
import updatetodo from '../actions/updatetodo'

const Todo = ({todo}) => {
  return (
    <div className='todo'>
    <div className='tododiv'>
      <h1 className='todotitle'>{todo.title}</h1>
      <p className='tododesc'>{todo.desc}</p>
      <p className='todotime'>{todo.date_den}</p>
    </div>
    <div className='todobutton'>
      <input className='checkbox' checked={todo.isChecked} onClick={()=> updatetodo(todo._id)} type='checkbox' />
      <button className='deletebutton' onClick={()=> removeTodo(todo._id)}>Delete</button>
    </div>
    </div>
  )
  
}

export default Todo