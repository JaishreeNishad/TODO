import React from 'react'

const TodoList = ({todos,setTodos}) => {

    const handleDelete = ({id})=>{
        setTodos(todos.filter((todo)=>todo.id !==id));
    };

    const handleEdit = ({id}) =>{
      

    }
  return (
    <div>

        {todos.map((todo)=>(
            <li className='mt-5 ' key={todo.id}>
             <input type="text"
             value={todo.title}
             className='px-1 py-1 rounded-lg'
             onChange={(event)=> event.preventDefault()}
             />
             
             <button className='text-white bg-black rounded-lg px-1 py-1 ml-2' onClick={()=>handleEdit(todo)}>
                EDIT
             </button>
            <button className='text-white bg-red-700 px-1 py-1 ml-2 text-center rounded-lg ' onClick={()=>handleDelete(todo)}>
                 DELETE
            </button>
             
            </li>
        ))}
    </div>
  );
};

export default TodoList