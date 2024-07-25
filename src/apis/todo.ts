export async function getTodolists() {
  const response = await fetch("/api/todolist");
  const data = await response.json();
  return data;
}
