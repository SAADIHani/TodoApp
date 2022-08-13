
import api from './api'


 const loginFunction = async(email) => {
    try {
        const response = await  api.post('/auth',{email})
        console.log(response.data.token)
        localStorage.setItem('token', response.data.token)
        return window.location.href = '/todos';
    } catch (err) {
        console.log('Somthing went wrong');
    }
  };
  

export default loginFunction;
