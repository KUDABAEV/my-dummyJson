import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/store";

import { getTodos } from "../todos-async-action";
import TodoItem from "./TodoItem";
import { selectTodos } from "../todos-selectors";

const TodosPage = () => {
  const dispatch = useAppDispatch();
  const todos = useAppSelector(selectTodos);

  useEffect(() => {
    dispatch(getTodos());
  }, [dispatch]);

  return (
    <div>
      <h1>TodosPage</h1>
      <ul>
        {
            todos.map(todo => {
                return (
                    <TodoItem key={todo.id} {...todo}/>
                )
            })
        }
      </ul>
    </div>
  );
};

export default TodosPage;
