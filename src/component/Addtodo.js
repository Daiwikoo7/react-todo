import React from "react";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { useHistory } from "react-router-dom";

import { addToDo } from "../service/actions/actions";

import "./styles/addtodo.css";

function Addtodo(props) {
  const [inputs, setInputs] = useState({});
  const history = useHistory();
  const dispatch = useDispatch();
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addToDo(inputs));
    setInputs({ taskName: "", description: "", date: "" });
    history.push("/");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="addtodo">ADD TO DO</h2>
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
export default Addtodo;
