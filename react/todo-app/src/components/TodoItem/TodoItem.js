import "./TodoItem.css";
import React from "react";
import { FcOk, FcEmptyTrash, FcBookmark } from "react-icons/fc";
import ReactTooltip from "react-tooltip";
const TodoItem = (props) => {
  const { todo, removeTodo, completeTodo, importantTodo } = props;
  return (
    <div
      className={todo.completed ? "todo-row complete" : "todo-row"}
      style={todo.important ? { background: "yellow" } : {}}
    >
      • {todo.text}
      <ReactTooltip />
      <div className="iconsContainer">
        <FcOk data-tip="hello world" onClick={() => completeTodo(todo.id)} />
        <FcBookmark
          onClick={() => importantTodo(todo.id)}
          className="important-btn"
        ></FcBookmark>
        <FcEmptyTrash
          style={{ marginRight: 5 }}
          onClick={() => removeTodo(todo.id)}
        />
      </div>
    </div>
  );
};
export default TodoItem;
