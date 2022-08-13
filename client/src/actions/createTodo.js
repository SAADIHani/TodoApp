import api from './api'


const createTodo = async(title, desc, date_den)=>{
    try {
        const response = await  api.post('/todo', {title, desc, date_den})
        window.location.href = '/todos'
        return response;
    } catch (err) {
        console.log('Somthing went wrong');
    }
}

export default createTodo
