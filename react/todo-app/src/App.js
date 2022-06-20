import React, { useState } from "react";
import "./index.css";
import TodoForm from "./components/TodoForm/TodoForm";
import TodoItem from "./components/TodoItem/TodoItem";
const App = () => {
  const [todos, setTodos] = useState([]);

  //function to create a new todo
  const addTodo = (text) => {
    let id = 1;
    if (todos.length > 0) {
      id = todos[0].id + 1;
    }
    let todo = { id: id, text: text, completed: false, important: false };
    let newTodos = [todo, ...todos];
    setTodos(newTodos);
  };

  //function to remove an existing todo
  const removeTodo = (id) => {
    let updatedTodos = [...todos].filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };
  //function to make a todo finished with a line through
  const completeTodo = (id) => {
    let updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };
  //function to highlight a todo
  const importantTodo = (id) => {
    let updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.important = !todo.important;
      }
      return todo;
    });

    setTodos(updatedTodos);
  };
  //rank first selected as important
  let sortedTodos = todos.sort((a, b) => b.important - a.important);

  return (
    <div className="todo-app">
      <TodoForm addTodo={addTodo} />
      {sortedTodos.map((todo) => {
        return (
          <TodoItem
            removeTodo={removeTodo}
            completeTodo={completeTodo}
            importantTodo={importantTodo}
            todo={todo}
            key={todo.id}
          />
        );
      })}
    </div>
  );
};

export default App;
