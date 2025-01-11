export interface ITodoServer {
    id: number,
    todo: string,
    completed: boolean,
    userId: number,
}

export interface ITodoDeleteResponse extends ITodoServer {
  isDeleted: boolean;
  deletedOn: string,
}

export interface ITodosResponseServer {
    todos: Array<ITodoServer>,
    total: number,
    skip: number,
    limit: number,
}

export type TTodoPartial = Partial<ITodoServer>;