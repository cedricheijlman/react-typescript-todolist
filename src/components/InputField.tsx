import React from "react";
import "./Inputfield.css";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
}

const InputField = ({ todo, setTodo }: Props) => {
  return (
    <form className="inputForm">
      <input placeholder="Enter a task" />
      <button>Go</button>
    </form>
  );
};

export default InputField;
