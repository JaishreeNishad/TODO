import React from "react";
import InsertToDo from "./InsertToDo";
import TODOLIST from "./TODOLIST";

const App = () => (
    <div className="flex items-center flex-col" >
      <InsertToDo />
      <TODOLIST />
    </div>
  );

export default App;