import React, { useState } from "react";

import "./App.css";
import InputField from "./components/InputField";
import { Todo } from "./components/model";
import SingleTodo from "./components/SingleTodo";
import TodoList from "./components/TodoList";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo) {
      setTodos((oldTodos) => [
        ...oldTodos,
        { id: Date.now(), todo: todo, isDone: false },
      ]);
    }
  };

  return (
    <div className="App">
      <span className="header">Typescript React Todo list</span>
      <InputField handleAdd={handleAdd} todo={todo} setTodo={setTodo} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default App;
