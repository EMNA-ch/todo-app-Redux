import React from "react";
import { useDispatch } from "react-redux";
import { completeTask, deleteTask } from "../redux/action";
import EditTask from "./EditTask";

const Todo = ({ task }) => {
  const dispatch = useDispatch();
  return (
    <div key={task.id}>
      <h2 className={task.isDone ? "done" : ""}>{task.task}</h2>
      <button onClick={() => dispatch(deleteTask(task.id))}>Delete</button>
      <button onClick={() => dispatch(completeTask(task.id))}>Complete</button>
      <EditTask task={task} />
    </div>
  );
};
export default Todo;
