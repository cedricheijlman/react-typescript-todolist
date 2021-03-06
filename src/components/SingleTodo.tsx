import React, { useEffect, useRef, useState } from "react";
import "./SingleTodo.css";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import DeleteIcon from "@mui/icons-material/Delete";
import DoneIcon from "@mui/icons-material/Done";
import { Todo } from "./model";
import { Draggable } from "react-beautiful-dnd";

interface SingleTodoProps {
  todo: Todo;
  index: number;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const SingleTodo = ({ todo, todos, setTodos, index }: SingleTodoProps) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [taskTodo, setTaskTodo] = useState<string>(todo.todo);

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

  // handle edit task
  const handleEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault();

    setTodos((prevValues) =>
      prevValues.map((todo) =>
        todo.id == id ? { ...todo, todo: taskTodo } : todo
      )
    );
    setTaskTodo("");
    setEdit(false);
  };

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, [edit]);

  return (
    <Draggable draggableId={todo.id.toString()} index={index}>
      {(provided) => (
        <form
          onSubmit={(e) => handleEdit(e, todo.id)}
          className="singleTodo"
          {...provided.dragHandleProps}
          {...provided.draggableProps}
          ref={provided.innerRef}
        >
          {edit ? (
            <input
              className="editInput"
              ref={inputRef}
              value={taskTodo}
              onChange={(e) => {
                setTaskTodo(e.target.value);
              }}
            />
          ) : todo.isDone ? (
            <h2 className="singleTodo__taskDone">{todo.todo}</h2>
          ) : (
            <h2 className="singleTodo__task">{todo.todo}</h2>
          )}

          <div className="todoIcons">
            <span
              onClick={() => {
                setEdit((prev) => !prev);
                setTaskTodo(todo.todo);
              }}
            >
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
        </form>
      )}
    </Draggable>
  );
};

export default SingleTodo;
