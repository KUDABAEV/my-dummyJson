import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/store";
import TodoItem from "./TodoItem";
import { createTodo, getTodos } from "../todos-async-action";
import { selectTodos } from "../todos-selectors";
import { TTodoNew } from "../todos-types";

const TodosPage = () => {
  const dispatch = useAppDispatch();
  const todos = useAppSelector(selectTodos);

  useEffect(() => {
    dispatch(getTodos());
  }, [dispatch]);

  const addTodoHandler = () => {
    const body: TTodoNew = {
      todo: prompt("Введите значение") || "",
      completed: false,
      userId: 5,
    };
    dispatch(createTodo(body));
  };

  return (
    <div>
      <h1>TodosPage</h1>
      <button onClick={addTodoHandler}>Create Todo</button>
      <ul>
        {todos.map((todo) => {
          return <TodoItem key={todo.id} {...todo} />;
        })}
      </ul>
    </div>
  );
};

export default TodosPage;
