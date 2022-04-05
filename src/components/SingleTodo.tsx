import React from "react";
import "./SingleTodo.css";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import DeleteIcon from "@mui/icons-material/Delete";
import DoneIcon from "@mui/icons-material/Done";
import { Todo } from "./model";

interface SingleTodoProps {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const SingleTodo = ({ todo, todos, setTodos }: SingleTodoProps) => {
  // handle task done
  const handleDone = (id: number) => {
    console.log(id);
    setTodos((prevValues) =>
      prevValues.map((todo) =>
        todo.id == id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  // handle delete task
  const handleDelete = (id: number) => {
    setTodos((prevValues) => prevValues.filter((todo) => todo.id !== id));
  };

  return (
    <div className="singleTodo">
      {todo.isDone ? (
        <h2 className="singleTodo__taskDone">{todo.todo}</h2>
      ) : (
        <h2 className="singleTodo__task">{todo.todo}</h2>
      )}
      <div className="todoIcons">
        <span>
          <BorderColorIcon className="singleTodo__icon" />
        </span>
        <span
          onClick={() => {
            handleDelete(todo.id);
          }}
        >
          <DeleteIcon className="singleTodo__icon" />
        </span>
        <span
          onClick={() => {
            handleDone(todo.id);
          }}
        >
          <DoneIcon className="singleTodo__icon" />
        </span>
      </div>
    </div>
  );
};

export default SingleTodo;
