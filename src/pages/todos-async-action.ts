import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosResponse } from "axios";
import {
  ITodoServer,
  ITodoServerDeleteResponse,
  ITodosServerResponse,
  TTodoNew,
  TTodoPartial,
} from "./todos-types";

export const getTodos = createAsyncThunk("todos/getTodos", async () => {
  const res: AxiosResponse<ITodosServerResponse> = await axios.get(
    "https://dummyjson.com/todos"
  );

  return res.data;
});

interface IUpdateTodoProps {
  id: ITodoServer["id"];
  body: TTodoPartial;
}

export const updateTodo = createAsyncThunk<ITodoServer, IUpdateTodoProps>(
  "todos/updateTodo",
  async ({ id, body }) => {
    const res: AxiosResponse<ITodoServer> = await axios.patch(
      `https://dummyjson.com/todos/${id}`,
      body
    );

    return res.data;
  }
);

export const removeTodo = createAsyncThunk(
  "todos/removeTodo",
  async (id: number) => {
    const res: AxiosResponse<ITodoServerDeleteResponse> = await axios.delete(
      `https://dummyjson.com/todos/${id}`
    );

    return res.data;
  }
);

export const createTodo = createAsyncThunk(
  "todos/createTodo",
  async (body: TTodoNew) => {
    const res: AxiosResponse<ITodoServer> = await axios.post(
      "https://dummyjson.com/todos/add",
      body
    );

    return res.data;
  }
);
