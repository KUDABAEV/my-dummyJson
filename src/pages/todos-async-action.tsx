import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosResponse } from "axios";
import {
  ITodoDeleteResponse,
  ITodoServer,
  ITodosResponseServer,
  TTodoPartial,
} from "./todos-types";

export const getTodos = createAsyncThunk("todos/getTodos", async () => {
  const res: AxiosResponse<ITodosResponseServer> = await axios.get(
    "https://dummyjson.com/todos"
  );

  return res.data;
});

export const deleteTodo = createAsyncThunk(
  "todos/deleteTodo",
  async (id: number) => {
    const res: AxiosResponse<ITodoDeleteResponse> = await axios.delete(
      `https://dummyjson.com/todos/${id}`
    );

    return res.data;
  }
);

interface IUpdateTodoProps {
  id: ITodoServer["id"];
  body: TTodoPartial;
}

export const updateTodo = createAsyncThunk<ITodoServer, IUpdateTodoProps>(
  "todos/updateTodo",
  async ({ id, body }) => {
    const res: AxiosResponse<ITodoDeleteResponse> = await axios.patch(
      `https://dummyjson.com/todos/${id}`,
      body
    );

    return res.data;
  }
);
