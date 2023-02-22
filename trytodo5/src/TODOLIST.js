import React, { useContext } from "react";
import { LocalInfoVar } from "./LocalInfo";
import TodoListItem from "./TodoListItem";

const TODOLIST = () => {
    const data = useContext(LocalInfoVar);
  return (
    <div className="bg-white mt-3 p-4 py-20 px-40 rounded-lg">
        <ul>
            {data?.itemsList.map(
                (
                    itemvalue,index
            ) =>(
                <TodoListItem
                task= {itemvalue.doc.task}
                taskId={itemvalue.id}
                key={itemvalue.id}
                getToDBFun = {data?.getToDBFun}
                todoIndex= {index}
                />
            )
            )}
        </ul>
    </div>
  );
};

export default TODOLIST;