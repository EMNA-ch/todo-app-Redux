import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask, filterTask } from "../redux/action";

const Add = () => {
  const { isFiltered } = useSelector((state) => state);
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const handleAdd = (e) => {
    const newTask = { id: Math.random(), task: query, isDone: false };
    e.preventDefault();
    if (query !== "") {
      dispatch(addTask(newTask));
    }
    setQuery("");
  };
  const handleTasks = () => {
    dispatch(filterTask());
  };
  return (
    <div>
      <form onSubmit={handleAdd}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button onClick={handleAdd}>Add task</button>
        <button onClick={handleTasks}>
          {isFiltered ? "All" : "Unfinished"}
        </button>
      </form>
    </div>
  );
};

export default Add;
