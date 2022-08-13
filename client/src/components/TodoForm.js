import React,{useState} from 'react'
import createTodo from '../actions/createTodo'
import './todofrom.css'

const TodoForm = ({}) => {
  
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    createTodo(inputs.title, inputs.desc, inputs.date)
  }
  return (
    
    <form className='todoform'>
      <label>
      <h2>Todo Title:</h2>
      <input 
        className='todoinput'
        type="string" 
        name="title" 
        value={inputs.title || ""} 
        onChange={handleChange}
        required
      />
      </label>
      <label>
      <h2>Todo Descreption:</h2>
        <input 
        className='todoinput'
          type="string" 
          name="desc" 
          value={inputs.desc || ""} 
          onChange={handleChange}
        />
        </label>
        <label>
        <h2>The due date:</h2>
        <input 
        className='todoinput'
          type="date" 
          name="date" 
          value={inputs.date || ""} 
          onChange={handleChange}
        />
        </label>
        <input className='todoinput' type="submit" onClick={handleSubmit} />
    </form>
    
  )
}

export default TodoForm