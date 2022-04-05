import React from "react";
import { Todo } from "./model";
import SingleTodo from "./SingleTodo";

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: React.FC<Props> = ({ todos, setTodos }) => {
  return (
    <div>
      {todos?.map((todo, index) => {
        return <SingleTodo key={index} todo={todo.todo} />;
      })}
    </div>
  );
};

export default TodoList;
