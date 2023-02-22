import React, { useState, useContext } from "react";

import { insertToDB } from "./PouchDB";
import { GlobalInfoVar } from "./GlobalInfo";

const InsertToDo = () => {
  const [input, setInput] = useState("");

  const data = useContext(GlobalInfoVar);

  const itemEvent = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newTodo = {
      task: input,
  
    };
    await insertToDB(newTodo);
    setInput("");
    // const ret = await data?.getToDBFun();
    // console.log("ret======== ", ret);
  };
  console.log(data,"checking");

  return (
    <div className="">
      <h1 className=" text-center text-3xl font-bold py-4 mr-5">TODO TASK</h1>
      <form onSubmit={handleSubmit} name="myForm">
        <input
          name="myTodo"
          type="text"
          required={React}
          placeholder="Add Tasks"
          value={input}
          onChange={itemEvent}
          className="border border-black py-1 px-2 "
        />
        <button
          type="submit"
          name="myForm"
          className="ml-5 border-black bg-slate-700 px-3 py-1 text-white"
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default InsertToDo;