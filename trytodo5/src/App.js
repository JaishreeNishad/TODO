import React from "react";
import InsertToDo from "./InsertToDo";
import TODOLIST from "./TODOLIST";

const App = () => (
  <div className="bg-orange-300">
    <div className=" flex justify-center items-center h-screen flex-col">
      <InsertToDo/>
      <TODOLIST/>
      
      </div>
      
    
    </div>
  );


export default App;