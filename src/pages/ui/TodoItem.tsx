import { useAppDispatch } from "../../app/store";
import { deleteTodo, updateTodo } from "../todos-async-action";
import { ITodoServer, TTodoPartial } from "../todos-types";

const TodoItem = ({id, todo, completed }: ITodoServer) => {

    const dispatch = useAppDispatch();

  const removeTodoHandler = () => {
    dispatch(deleteTodo(id))
  };

  const handlerChangeTodo = () => {
    const body: TTodoPartial = {
        completed: !completed,
    }

    dispatch(updateTodo({id,body}))
  }
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <input type="checkbox" checked={completed} onChange={handlerChangeTodo} />
      <p>{todo}</p>
      <button
        onClick={removeTodoHandler}
        style={{ background: "orange", cursor: "pointer", width: "25px" }}
      >
        x
      </button>
    </div>
  );
};

export default TodoItem;
