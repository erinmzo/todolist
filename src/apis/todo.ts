import { TTodo } from "@/types/todo";

export async function getTodolists() {
  const response = await fetch("/api/todolist");
  const data = await response.json();
  return data;
}

export async function insertTodo(newTodo: TTodo) {
  const response = await fetch("/api/todolist", {
    method: "POST",
    body: JSON.stringify(newTodo),
  });
  const data = await response.json();
  return data;
}

export async function deleteTodo(todoId: string) {
  const response = await fetch(`/api/todoList/${todoId}`, { method: "DELETE" });
  const data = await response.json();
  return data;
}
