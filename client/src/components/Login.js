
import React, {  useEffect, useState } from 'react';
import loginFunction from '../actions/loginFunction';
import './login.css'
import removeAllTodo from '../actions/removeAllTodo';

const Login = () => {
  const token = localStorage.getItem('token')
  useEffect(()=>{
    
    if(token == null){
      return;
    }else{
      return window.location.href = '/todos';
    }
  })
  const [formData, setFormData] = useState({
    email: '',
  });
  const [error, setError] = useState(null);
  const { email } = formData;
  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  const onChange = (e) =>{
if (!isValidEmail(e.target.value)) {
      setError('Email is invalid');
    } else {
      setError(null);
    }
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }
  
    

  const onSubmit = (e) => {
    e.preventDefault();
    if(error === null){
      loginFunction(email)
    }else{
      console.log('can not login')
    }
  };

  return (
    <section className="container">
      <h1 className="large text-primary">Sign In</h1>
      <p className="lead">
        <i className="fas fa-user" /> Sign Into Your Account
      </p>
      <form className="form" >
        <div className="form-group">
          <input
            type="email"
            placeholder="Email Address"
            name="email"
            value={email}
            onChange={onChange}
          />
        </div>
        <input type="submit" className="btn btn-primary" onClick={onSubmit}/>
      </form>
      {error && <p style={{color: 'red'}}>{error}</p>}
      <button className='deleteallbtn' onClick={()=>removeAllTodo()}>Delete All Todos</button>
    </section>
  );
};


export default Login
