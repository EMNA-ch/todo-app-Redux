import { ADD, COMPLETE, DELETE, EDIT, FILTER } from "./actionTypes.";

export const deleteTask = (x) => {
  return {
    type: DELETE,
    payload: x,
  };
};

export const completeTask = (x) => {
  return {
    type: COMPLETE,
    payload: x,
  };
};
export const filterTask = () => {
  return {
    type: FILTER,
  };
};
export const addTask = (newTask) => {
  return {
    type: ADD,
    payload: newTask,
  };
};
export const editTask = (editedTask) => {
  return {
    type: EDIT,
    payload: editedTask,
  };
};
