import React from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { useHistory } from "react-router-dom";

import { editToDo } from "../service/actions/actions";

function EditTodo() {
  const params = useParams(); //params.todoId
  const todo = useSelector((state) =>
    state.todos.find((todo) => {
      return todo.id === params.todoId;
    })
  );
  const [inputs, setInputs] = useState(todo);
  const history = useHistory();
  const dispatch = useDispatch();
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(editToDo(inputs));
    setInputs({ taskName: "", description: "", date: "" });
    history.push("/");
  };
  if (!todo) return <h2>Todo Not Found</h2>;
  return (
    <form onSubmit={handleSubmit}>
      <h2 className="edittodo">EDIT TO DO</h2>
      <input
        type="text"
        id="name"
        placeholder="Name"
        name="taskName"
        value={inputs.taskName}
        onChange={handleChange}
      />
      <textarea
        id="description"
        placeholder="Description"
        name="description"
        rows={3}
        value={inputs.description}
        onChange={handleChange}
      />
      <input
        type="datetime-local"
        id="date"
        placeholder="Date"
        name="date"
        value={inputs.date}
        onChange={handleChange}
      />
      <button className="submit-btn" type="submit">
        Submit
      </button>
    </form>
  );
}

export default EditTodo;
