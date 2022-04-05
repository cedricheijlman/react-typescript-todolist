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
  return (
    <div className="singleTodo">
      <h2>{todo.todo}</h2>
      <div className="todoIcons">
        <span>
          <BorderColorIcon className="singleTodo__icon" />
        </span>
        <span>
          <DeleteIcon className="singleTodo__icon" />
        </span>
        <span>
          <DoneIcon className="singleTodo__icon" />
        </span>
      </div>
    </div>
  );
};

export default SingleTodo;
