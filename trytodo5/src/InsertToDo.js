
import React, { useContext, useState } from "react";
import { LocalInfoVar } from "./LocalInfo";
import{ insertToDB} from "./PouchDB";

const InsertToDo = () => {

const [Input,setinput] = useState("");

const data = useContext(LocalInfoVar);

const itemEvent = (e) => {
    setinput(e.target.value);
};

 const handleSubmit = async (e) =>{
        e.preventDefault();
        const newTodo={
            task: Input,
            isDone: false,
            
        };
        await insertToDB(newTodo);
        setinput("");
        const ret = await data.getToDBFun();
        console.log("ret=====",ret);
    };
    

  return (
    <div className="w-full mx-3">
        <div className="text-center mb-5">
        <h1 className=' text-5xl font-bold  text-center'>TODO TASK</h1>
        </div>
        <div>
    
        <form onSubmit={handleSubmit} name='myForm' className=" flex justify-center ">
            <input name='myTodo'
            type='text'
            required={React}
            placeholder="Add Task"
            onChange={itemEvent}
            value={Input}
            className="bg-orange-100 px-5 py-2 rounded-l-full "
            />
            <button type="Submit" name="myForm"
            className=" border-black bg-orange-500 px-3 py-1 text-white ml-5 ">
                ADD
            </button>

        </form>
        </div>
    </div>
  );
};

export default InsertToDo;