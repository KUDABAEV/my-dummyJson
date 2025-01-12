import { TRootState } from "../app/store";

export const selectTodos = (state: TRootState) => {
    return state.todos.list;
}