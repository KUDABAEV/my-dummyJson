import { useAppDispatch } from "../../app/store";
import { removeTodo, updateTodo } from "../todos-async-action";
import { ITodoServer, TTodoPartial } from "../todos-types";

const TodoItem = ({ id, todo, completed }: ITodoServer) => {
  const dispatch = useAppDispatch();

  const changeCheckedHandler = () => {
    const body: TTodoPartial = {
      completed: !completed,
    };
    dispatch(updateTodo({ id, body }));
  };

  const changeTitleHandler = () => {
    const body: TTodoPartial = {
      todo: prompt("Введите новое значение") || "",
    };
    dispatch(updateTodo({ id, body }));
  };

  const deleteTodoHandler = () => {
    dispatch(removeTodo(id));
  };

  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <input
        type="checkbox"
        checked={completed}
        onChange={changeCheckedHandler}
      />
      <p>{todo}</p>

      <div>
        <button
          onClick={changeTitleHandler}
          style={{ background: "violet", cursor: "pointer", width: "45px" }}
        >
          edit
        </button>
        <button
          onClick={deleteTodoHandler}
          style={{ background: "orange", cursor: "pointer", width: "25px" }}
        >
          x
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
