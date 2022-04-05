import React from "react";
import "./SingleTodo.css";

interface SingleTodoProps {
  todo: string;
}

const SingleTodo = ({ todo }: SingleTodoProps) => {
  return (
    <div>
      <h2>{todo}</h2>
    </div>
  );
};

export default SingleTodo;
