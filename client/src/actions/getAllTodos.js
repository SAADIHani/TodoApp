import api from './api'


 const getAllTodos = () => async () => {
    try {
        const response  = await api.get('/todo')
        localStorage.setItem('todolist',response.data)
    } catch (err) {
        console.log('can not get todos')
    }
  };
  

export default getAllTodos;