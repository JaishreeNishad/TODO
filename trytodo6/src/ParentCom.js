
import React, {  useContext,useState } from 'react';
import { MainComponentVar } from './MainComponent';
import { parentToDB } from './PouchDB';

const ParentCom = () => {

    const [Entry, setEntry] = useState("");

    const data = useContext(MainComponentVar);

    console.log("tool",data);

    const valueEvent =(e)=>{
        setEntry(e.target.value);
    };

    const handlerSubmit = async (e)=>{
        e.preventDefault();
        const freshTodo = {
            task:Entry,
            isDone:false,
        };
        await parentToDB(freshTodo);
        setEntry("");
        const ret = await data.getTofun();
        console.log("ret=====",ret);
    };
    console.log("checking",data);

  return (
    <div>
        < h1 className='text-black'>Todo List</h1>
        <form onSubmit={handlerSubmit} name="myForm">
        <input type="text"
         placeholder="Enter value"
         name="myTodo"
         value={Entry}
         onChange={valueEvent} 
        className='border border-black' />
        <button
        type="submit" name="myForm">
            +
        </button> 
        </form>
    </div>
  )
}

export default ParentCom;