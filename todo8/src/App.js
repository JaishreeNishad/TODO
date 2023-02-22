import React, { useState } from 'react';
import Form from "./Components/Form"
import Header from "./Components/Header";
import TodoList from './Components/TodoList';

const App = () => {
  const [input,setInput] = useState("");
  const [todos ,setTodos] = useState([]);
  const [editTodo, setEditTodo] = useState(null);
  return (
    <div className='bg-yellow-600 h-screen flex justify-center'>
    <div className=' bg-green-900 px-40 p-30px mt-10 mb-20 '>
      <Header/>
      <div className='mt-10'>
      <Form input={input}
      setInput={setInput}
      todos={todos}
      setTodos={setTodos}/>
      </div>
      <div>
        <TodoList todos={todos}
      setTodos={setTodos}/>
      </div>

      

    </div>
    </div>
  )
}

export default App;