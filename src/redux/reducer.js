import { ADD, COMPLETE, DELETE, EDIT, FILTER } from "./actionTypes.";

const init = {
  todolist: [
    {
      id: Math.random(),
      task: "wake up",
      isDone: false,
    },
    {
      id: Math.random(),
      task: "shopping",
      isDone: true,
    },
  ],
  isFiltered: false,
};
const reducer = (state = init, { type, payload }) => {
  switch (type) {
    case DELETE:
      return {
        ...state,
        todolist: state.todolist.filter((el) => el.id !== payload),
      };
    case COMPLETE:
      return {
        ...state,
        todolist: state.todolist.map((el) =>
          el.id === payload ? { ...el, isDone: !el.isDone } : el
        ),
      };
    case FILTER:
      return {
        // state,
        // todolist: state.todolist.filter((el) => el.isDone === false),
        ...state,
        isFiltered: !state.isFiltered,
      };
    case ADD:
      return { ...state, todolist: [...state.todolist, payload] };
    case EDIT:
      return {
        ...state,
        todolist: state.todolist.map((el) =>
          el.id === payload.id ? payload : el
        ),
      };

    default:
      return state;
  }
};

export default reducer;
