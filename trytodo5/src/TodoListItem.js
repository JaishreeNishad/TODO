import React,{memo, useState} from 'react';
import PropTypes from "prop-types";
// eslint-disable-next-line no-unused-vars
import { itemEdit, removeToDB} from './PouchDB';

const TodoListItem = ({task,taskId,getToDBFun}) => {
    const[itemsEdit,setitemEdit] = useState("");

    const removeTodo = async ()=>{
        await removeToDB(taskId);
        await getToDBFun();
    };

    const editData = async()=>{
        await itemEdit(taskId, {task: itemsEdit, isDone: false});
        await getToDBFun();
    };
    
    
     
  return (
    <div className=' mt-1 flex'>
        
            <li className=" text-white  border border-2xl  bg-red-900">{task}</li>
        
        <div className="    text-white bg-black border ">
            <button type="button" onClick={removeTodo}>
                DELETE
            </button>
        </div>
        <button type='button' className='mx-2 bg-black text-white' onClick={()=>editData()}>
                EDIT
        </button>
        <input type='text' placeholder='Edit input' className='border border-gray-700' value={itemsEdit} onChange={(e)=>
        setitemEdit(e.target.value)}/>
    </div>
  );
};

export default memo(TodoListItem);

TodoListItem.propTypes = {
    task: PropTypes.string,
    taskId:PropTypes.string,
    getToDBFun:PropTypes.func,
};

TodoListItem.defaultProps = {
    task: "sample task",
    taskId:"no id",
    getToDBFun:()=>{},
    
    
};