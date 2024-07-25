export type Todo = {
  id: string;
  created_at: string;
  title: string;
  content: string;
};

export type TTodo = Omit<Todo, "id" | "created_at">;
