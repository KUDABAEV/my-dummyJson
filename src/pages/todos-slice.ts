import { createSlice } from "@reduxjs/toolkit";
import { ITodoServer } from "./todos-types";
import {
  createTodo,
  getTodos,
  removeTodo,
  updateTodo,
} from "./todos-async-action";

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

    builder.addCase(updateTodo.fulfilled, (state, action) => {
      state.list = state.list.map((todo) => {
        if (todo.id === action.payload.id) {
          return action.payload;
        } else {
          return todo;
        }
      });
    });

    builder.addCase(removeTodo.fulfilled, (state, action) => {
      if (action.payload.isDeleted) {
        state.list = state.list.filter((todo) => todo.id !== action.payload.id);
      }
    });

    builder.addCase(createTodo.fulfilled, (state, action) => {
      state.list = [action.payload, ...state.list];
    });
  },
});
