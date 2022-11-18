import React from "react";
import "./App.css";
import { useSelector } from "react-redux";
import Todo from "./components/Todo";
import Add from "./components/Add";

function App() {
  const { todolist, isFiltered } = useSelector((state) => state);

  return (
    <div className="App">
      <Add />
      {!isFiltered ? (
        <div>
          {todolist.map((el) => (
            <Todo task={el} />
          ))}
        </div>
      ) : (
        <div>
          {todolist
            .filter((t) => !t.isDone)
            .map((el) => (
              <Todo task={el} />
            ))}
        </div>
      )}
    </div>
  );
}

export default App;
