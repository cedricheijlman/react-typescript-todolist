import React from "react";
import "./Inputfield.css";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}

const InputField = ({ todo, setTodo, handleAdd }: Props) => {
  return (
    <form onSubmit={handleAdd} className="inputForm">
      <input
        onChange={(e) => {
          setTodo(e.target.value);
        }}
        placeholder="Enter a task"
      />
      <button>Go</button>
    </form>
  );
};

export default InputField;
