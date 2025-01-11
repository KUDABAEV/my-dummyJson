import { createSlice } from "@reduxjs/toolkit";
import { ITodoServer } from "./todos-types";
import { deleteTodo, getTodos, updateTodo } from "./todos-async-action";

interface IInitialState {
  list: ITodoServer[];
}

const initialState: IInitialState = {
  list: [],
};

export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getTodos.fulfilled, (state, action) => {
      state.list = action.payload.todos;
    });

    builder.addCase(deleteTodo.fulfilled, (state, action) => {
      if (action.payload.isDeleted) {
        state.list = state.list.filter((t) => t.id !== action.payload.id);
      }
    });
    builder
        .addCase(updateTodo.fulfilled, (state,action) => {
            state.list = state.list.map(todo => {
                if (todo.id === action.payload.id) {
                    return action.payload
                }else {
                    return todo;
                }
            })
            
        })
  },
});
