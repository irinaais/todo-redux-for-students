import { createStore } from "redux";

let countId = 0;

const defaultState = [
  {
    id: countId++,
    text: "Помыть кота",
    status: true,
  },
];

const todoReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        {
          id: countId++,
          text: action.text,
          status: false,
        },
      ];
    case "DELETE_TODO":
      return state.filter((todo) => todo.id !== action.id);
    case "CHANGE_DONE":
      return state.map((todo) =>
          todo.id === action.id ? { ...todo, status: !todo.status } : todo
      );
    default:
      return state;
  }
};

export const addTodoAction = (text) => ({
  type: "ADD_TODO",
  text,
});

export const deleteTodoAction = (id) => ({
  type: "DELETE_TODO",
  id,
});

export const changeDoneAction = (id) => ({
  type: "CHANGE_DONE",
  id,
});

export const store = createStore(todoReducer);
