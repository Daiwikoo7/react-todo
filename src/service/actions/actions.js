import { ADD_TO_DO, REMOVE_TO_DO, EDIT_TO_DO } from "../constants";

export const addToDo = (payload) => {
  return {
    type: ADD_TO_DO,
    payload: payload,
  };
};
export const removeToDo = (payload) => {
  return {
    type: REMOVE_TO_DO,
    payload: payload,
  };
};

export const editToDo = (payload) => {
  return {
    type: EDIT_TO_DO,
    payload: payload,
  };
};
