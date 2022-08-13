import api from './api'


const removeTodo = async(id)=>{
    try{
    await api.delete(`/todo/${id}`)
    console.log("todo updated")
     window.location.href = '/todos'
    }catch(err){
    console.log('can not update todo')
    }
}

export default removeTodo