import React from "react";
import { Todo } from "./model";
import SingleTodo from "./SingleTodo";
import "./SingleTodo.css";

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: React.FC<Props> = ({ todos, setTodos }) => {
  return (
    <div className="allTodos">
      {todos?.map((todo, index) => {
        return (
          <SingleTodo
            key={index}
            todo={todo}
            todos={todos}
            setTodos={setTodos}
          />
        );
      })}
    </div>
  );
};

export default TodoList;
