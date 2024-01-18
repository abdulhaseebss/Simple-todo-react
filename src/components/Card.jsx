import React, { useRef, useState } from 'react'

const Card = ({title , index , deleteTodo , editTodo}) => {
    const [showTodo , setShowTodo] = useState(true);
    const editedValue = useRef()
    const editedTodo = ()=>{
        if (editedValue.current.value === '') {
            alert('enter value');
            return
        }
        editTodo(index ,editedValue.current.value)
        setShowTodo(true)
    }

    const cancelBtn = ()=>{
        setShowTodo(true)
    }
  return (
    <div className=' mt-3'>
        {showTodo ? 

        <div><h1 className=' text-2xl font-semibold m-2'>{title}</h1>
        <button className=' bg-red-200 p-2 rounded-md ml-2 font-semibold hover:bg-red-500 hover:text-white transition-all' onClick={deleteTodo}>Delete</button>
        <button className='bg-blue-200 p-2 rounded-md ml-2 font-semibold hover:bg-blue-500 hover:text-white transition-all' onClick={()=>setShowTodo(false)}>Edit</button>
        <hr className=' mt-3'/></div>

         : 
         
         <div>
            <input className='bg-gray-200 p-2 rounded-md outline-none m-2' type="text" ref={editedValue} /><br />
        <button className=' bg-red-200 p-2 rounded-md ml-2 font-semibold hover:bg-red-500 hover:text-white transition-all' onClick={cancelBtn}>Cancel</button>
        <button className='bg-blue-200 p-2 rounded-md ml-2 font-semibold hover:bg-blue-500 hover:text-white transition-all' onClick={editedTodo}>Save</button>
        <hr className=' mt-3'/></div>}
    </div>
  )
}

export default Card