import React from "react";
import { Droppable } from "react-beautiful-dnd";
import { Todo } from "./model";
import SingleTodo from "./SingleTodo";
import "./SingleTodo.css";

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  completedTodos: Todo[];
  setCompletedTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: React.FC<Props> = ({
  todos,
  setTodos,
  completedTodos,
  setCompletedTodos,
}) => {
  return (
    <div className="allTodos">
      <Droppable droppableId="TodosList">
        {(provided, snapshot) => (
          <div
            className={`allTodos__activeTasks ${
              snapshot.isDraggingOver ? "dragActive" : ""
            }`}
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            <span className="allTodos__headerText">Active Tasks</span>
            {todos?.map((todo, index) => {
              return (
                <SingleTodo
                  key={index}
                  todo={todo}
                  todos={todos}
                  setTodos={setTodos}
                  index={index}
                />
              );
            })}
          </div>
        )}
      </Droppable>
      <Droppable droppableId="CompletedTodos">
        {(provided, snapshot) => (
          <div
            className={`allTodos__completedTasks ${
              snapshot.isDraggingOver ? "dragComplete" : ""
            }`}
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            <span className="allTodos__headerText">Completed Tasks</span>
            {completedTodos?.map((todo, index) => {
              return (
                <SingleTodo
                  key={index}
                  todo={todo}
                  todos={completedTodos}
                  setTodos={setCompletedTodos}
                  index={index}
                />
              );
            })}
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default TodoList;
