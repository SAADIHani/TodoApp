import React from 'react'
import Todo from './Todo'



const TodoList = ({todos}) => {
  console.log(todos)
  return (
    <div>
     {
     todos === null ? ( <h1>Loading</h1>) : ( todos.map((todo)=> (<Todo todo={todo}/>)))
     }  
    </div>
  )
}

export default TodoList