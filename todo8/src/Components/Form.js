import React from 'react';
import {v4 as uuidv4} from "uuid";

const Form = ({input,setInput,todos,setTodos}) => {

  const onInputChange = (event) =>{
    setInput(event.target.value);
  };

  const onFormSubmit = (event)=>{
      event.preventDefault();
      setTodos([...todos, {id: uuidv4(), title: input,completed:false}]);
      setInput("");
      
  };
  
  
  return (
    <form onSubmit={onFormSubmit}>
        <input type="text"
         placeholder="Enter a Todo..."
         className='bg-black rounded-lg px-5 py-2 text-white'
         value={input}
         onChange={onInputChange}/>
        <button className='text-black bg-yellow-700 text-center px-5 rounded-lg py-2 pl-5 ml-3'>ADD</button>
    </form>
    
  )
}

export default Form;