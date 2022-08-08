import { ADD_TO_DO, REMOVE_TO_DO, EDIT_TO_DO } from "../constants";

const initialState = {
  todos: [
    {
      taskName: "Break",
      description: "Sleep",
      date: "2022-08-08T21:30",
      id: "98399",
    },
  ],
};

export default function toDoReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_DO:
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            ...action.payload,
            id: Math.ceil(Math.random() * 100000).toString(),
          },
        ],
      };
    case REMOVE_TO_DO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload.id),
      };
    case EDIT_TO_DO:
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id === action.payload.id) {
            return action.payload;
          }
          return todo;
        }),
      };

    default:
      return state;
  }
}
