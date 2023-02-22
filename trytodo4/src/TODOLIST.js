import React, { useContext } from "react";
import TodoListItem from "./TodoListItem";
import { GlobalInfoVar } from "./GlobalInfo";

const TODOLIST = () => {
  const data = useContext(GlobalInfoVar);

  

  return (
    <div>
      <ul>
        {data?.itemsList.map(
          (
            itemvalue,
            index
          ) => (
            <TodoListItem
              task={itemvalue.doc.task}
              taskId={itemvalue.id}
              key={itemvalue.id}
              getToDBFun={data?.getToDBFun}
              todoIndex={index}
            />
          )
        )}
      </ul>
    </div>
  );
};

export default TODOLIST;

// TodoListItem.propTypes = {
//   itemsList: PropTypes.array.isRequired,
//   getToDBFun: PropTypes.func.isRequired,
// };

// TodoListItem.defaultProps = {
//   itemsList: [],
//   getToDBFun: () => {},
// };