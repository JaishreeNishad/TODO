import React, { useState } from 'react';


const App = () => {
const [todo, setTodo] = useState('');
const [todos, setTodos] = useState([]);
const [editId, setEditId] = useState(null);

const handleSubmit = (e) =>{
  e.preventDefault();

  if (editId){
    const editTodo = todos.find((i)=>i.id === editId);
    const updateTodos= todos.map((t)=>
    t.id ===editTodo.id?(
      t={id:t.id,todo})
      :{id: t.id, todo: t.toto}
      );
    
  setTodos(updateTodos);
  setEditId(null);
  setTodo("");
  return;
    }


  if(todo !==""){
    setTodos([{id: `${todo}-${Date.now()}`, todo}, ...todos]);
    setTodo('');
};
}


const handleDelete = (id) =>{
  const delTodo = todos.filter((to)=>to.id !==id);
  setTodos([...delTodo ]);
};

const handleEdit = (id)=> {

  const editTodo = todos.find((i)=>i.id ===id);
  setTodo(editTodo.todo);
  setEditId(id);
};
  
 
  return (
    
    <div className='h-screen bg-yellow-700'>
      <h1 >ToDo List</h1>
      <form onSubmit={handleSubmit}>
        <input type='text' placeholder='Enter input...'value={todo} onChange={(e)=>setTodo(e.target.value)}/>
        <button type='submit'>{editId ? 'Edit':'GO'}</button>
      </form>
      <ul>
        {
          todos.map((t)=>(
          <li>
            <span key={t.id}>{t.todo}</span>
            <button className='ml-3' onClick={()=>handleEdit(t.id)}>Edit</button>
            <button className='ml-3' onClick={()=> handleDelete(t.id)}>Delete</button>
          </li>
         )) } 
      </ul>
      </div>
    
  );
};

export default App