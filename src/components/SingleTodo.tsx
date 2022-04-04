import React from "react";
import "./Todo.css";

interface SingleTodoProps {
  todo: string;
}

const SingleTodo = ({ todo }: SingleTodoProps) => {
  return <h1>{todo}</h1>;
};

export default SingleTodo;
