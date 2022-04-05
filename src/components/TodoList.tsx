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
      <div className="allTodos__activeTasks">
        <span className="allTodos__headerText">Active Tasks</span>
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
      <div className="allTodos__completedTasks">
        <span className="allTodos__headerText">Completed Tasks</span>
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
    </div>
  );
};

export default TodoList;
