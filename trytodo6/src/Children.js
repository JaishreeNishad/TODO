import React, { useContext } from "react";
import Childlist from "./Childlist";
import {MainComponentVar } from "./MainComponent";

const Children = () => {
  const data = useContext(MainComponentVar);
console.log("children",data);
  

  return (
    <div>
      <ul>
        {data?.list.map(
          (
            listvalue,
            index
          ) => (
            <Childlist
              task={listvalue.doc.task}
              taskId={listvalue.id}
              key={listvalue.id}
              getTofun={data?.getTofun}
              todoIndex={index}
            />
          )
        )}
      </ul>
    </div>
  );
};

export default Children;