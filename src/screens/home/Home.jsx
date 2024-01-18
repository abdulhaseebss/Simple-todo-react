import React, { useRef, useState } from 'react'
import Card from '../../components/Card'

const Home = () => {
    const todo = useRef()
    const [data , setData] = useState([])
    const addTodo = (e)=>{
        e.preventDefault()
        if (todo.current.value === "") {
            alert('Invalid Value')
            return
        }
        data.push(todo.current.value);
        setData([...data])
        console.log(data);
        todo.current.value = ""
    }

    const deleteTodo = (index)=>{
        console.log('Deleted', index);
        data.splice(index , 1)
        setData([...data])
    }
    const editTodo = (index ,value)=>{
        // console.log('todo Edited', value ,index);
        data.splice(index , 1 , value)
        setData([...data])
    }
  return (
    <>
        <h1 className=' text-2xl font-semibold text-center mt-4'>Todo App</h1>
        <form onSubmit={addTodo} className=' text-center mt-5'>   
            <input className=' bg-gray-200 p-2 rounded-md outline-none' type="text" ref={todo} placeholder='Enter Todo'/>
            <button className=' ml-2 font-semibold hover:bg-blue-500 p-2 rounded-md hover:text-white transition-all' type='submit'>Add</button>
        </form>
        {data.length > 0 ? data.map((item , index)=>{
            return <Card key={index} title={item} index={index} deleteTodo={()=>deleteTodo(index)} data={data} editTodo={editTodo}/>
        }) : <h1 className=' text-center text-2xl font-semibold mt-5'>No Item ...</h1>}
    </>
  )
}

export default Home