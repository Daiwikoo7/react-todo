import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { removeToDo } from "../service/actions/actions";

import "./styles/table.css";

function Table(props) {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const handleDelete = (todo) => {
    dispatch(removeToDo(todo));
  };
  const history = useHistory();
  const handleEdit = (todo) => {
    history.push("/EditTodo/" + todo.id);
  };
  return (
    <div className="todos">
      <h2 className="tableh2">TO DOS</h2>
      <table className="table">
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Description</th>
          <th>Date</th>
          <th>Delete</th>
          <th>Edit</th>
        </tr>
        {todos.map((todo, index) => (
          <tr data-index={index}>
            <td>{index + 1}</td>
            <td>{todo.taskName}</td>
            <td>{todo.description}</td>
            <td>{todo.date.toString()}</td>
            <td>
              <button
                className="delete-btn"
                onClick={() => {
                  handleDelete(todo);
                }}
              >
                Delete
              </button>
            </td>
            <td>
              <button
                className="edit-btn"
                onClick={() => {
                  handleEdit(todo);
                }}
              >
                Edit
              </button>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
}
export default Table;
