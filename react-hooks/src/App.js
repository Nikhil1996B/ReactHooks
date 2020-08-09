import React, { useEffect, useState } from "react";
import "./App.css";
import Todo from "./components/Todo";
import Todoform from "./components/Todoform";

function App() {
  const [todos, setTodos] = useState([
    { text: "todo1", isCompleted: false },
    { text: "todo2", isCompleted: false },
    { text: "todo3", isCompleted: false },
  ]);

  const addTodo = (text) => {
    const newTodos = [...todos, { text}];
    setTodos(newTodos);
  };

  const completeTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  };

  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="todo-list">
      {todos.map((todo, index) => (
        <Todo
          todo={todo}
          index={index}
          key={index}
          completeTodo={completeTodo}
          removeTodo={removeTodo}
        />
      ))}
      <Todoform addTodo={addTodo} />
    </div>
  );
}

export default App;
