import React, { memo } from "react";
import PropTypes from "prop-types";
import { removeToDB } from "./PouchDB";

const Childlist = ({ task, taskId, getTofun }) => {
  const removeTodo = async () => {
    await removeToDB(taskId);
    await getTofun();
  };

  return (
    <div className="space-y-5 flex space-x-5 items-center">
      <div className="items-center">
        <li className="mt-3">{task}</li>
      </div>
      <div className=" space-x-5 space-y-2">
        <button type="button" onClick={removeTodo}>
          X
        </button>
      </div>
    </div>
  );
};

export default memo(Childlist);

Childlist.propTypes = {
  task: PropTypes.string,
  taskId: PropTypes.string,
  getTofun:PropTypes.func,
};

Childlist.defaultProps = {
  task: "sample task",
  taskId: "no id",
  getTofun: () => {},
};