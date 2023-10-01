import { useState, useContext } from "react";
import {TaskContext} from '../context/TaskContext'

export default function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const { createTask } = useContext(TaskContext)

  const handleSubmit = (e) => {
    e.preventDefault();

    createTask({ title, description });
    setTitle("");
    setDescription("");
  };
  return (
    <div className="formsContainer">
      <form onSubmit={handleSubmit} className="forms">
        <h1 id="form-title">Create your task</h1>
      <input
        placeholder="Write your task"
        onChange={(e) => setTitle(e.target.value)}
        className="textInputs"
        autoFocus
      />{" "}
      <br />
      <textarea
        className="textInputs"
        placeholder="Write your task"
        onChange={(e) => setDescription(e.target.value)}
      />
      <button
        onClick={() => {
          document.querySelector("textarea").value = "";
          document.querySelector("input").value = "";
        }}
      >
        Guardar
      </button>
    </form>
    </div>
  );
}
