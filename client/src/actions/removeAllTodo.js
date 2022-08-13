import api from './api'


const removeAllTodo = async(id)=>{
    try{
    await api.delete('/todo')
    console.log("All todo deleted")
     window.location.href = '/todos'
    }catch(err){
    console.log('can not update todo')
    }
}

export default removeAllTodo