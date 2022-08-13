import React, { useEffect, useState } from 'react'
import api from '../actions/api'
import './dashboard.css'
import TodoForm from './TodoForm'
import TodoList from './TodoList'
import removeAllTodo from '../actions/removeAllTodo'

const Dashboard = () => {
    const [todos,setTodos]=useState(null)
    const token = localStorage.getItem('token')
    useEffect(()=>{
      if(token == null){
        return window.location.href = '/';
      }
      getAllTodos()
      if(todos === null){
        getAllTodos()
      }
    },[])
    const getAllTodos = async() => {
      try {
          const response  = await api.get('/todo')
          setTodos(response.data)
      } catch (err) {
          console.log('can not get todos')
      }
    };
    console.log(todos)
  return (
    <div className='todoapp'>
        <div className='todolist'>
            <h1 className='title'>Todo List</h1>
            < TodoList todos={todos}/>
            </div>
        <div className='addtodo'>
        <h1 className='title' >Create TodoList</h1>
            <TodoForm/>
            <button className='deleteallbtn' onClick={()=>removeAllTodo()}>Delete All Todos</button>
            </div>
    </div>
  )
}

export default Dashboard