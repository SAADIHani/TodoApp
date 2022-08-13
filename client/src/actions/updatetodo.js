import api from './api'


const updateTodo = async(id)=>{
    try{
    await api.put(`/todo/${id}`)
    console.log("todo updated")
    window.location.href = '/todos'
    }catch(err){
    console.log('can not update todo')
    }
}

export default updateTodo