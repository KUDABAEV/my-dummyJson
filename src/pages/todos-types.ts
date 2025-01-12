export interface ITodoServer {
  id: number;
  todo: string;
  completed: boolean;
  userId: number;
}

export interface ITodosServerResponse {
  todos: Array<ITodoServer>;
  total: number;
  skip: number;
  limit: number;
}

export interface ITodoServerDeleteResponse extends ITodoServer {
  deletedOn: string;
  isDeleted: boolean;
}

export type TTodoPartial = Partial<ITodoServer>;
export type TTodoNew = Omit<ITodoServer, "id">;
