import React, { useState } from "react";
import "./TodoForm.css";
const TodoForm = (props) => {
  const [input, setInput] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    props.addTodo(input);
    setInput("");
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <h1>Simple Todo List</h1>
      <h6>Created with ReactJs by Dionis Uliu</h6>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="todo-input"
        placeholder="Type your todo item"
      />
      <button type="submit" className="todo-button">
        Add item
      </button>
    </form>
  );
};
export default TodoForm;
