import { useEffect, useState } from "react";

const API = "http://localhost:5000/api/todos";

export default function Home() {
  const [todos, setTodos] = useState([]);

  const loadTodos = async () => {
    const res = await fetch(API);
    setTodos(await res.json());
  };

  useEffect(() => {
    loadTodos();
  }, []);

  const toggleTodo = async (id) => {
    await fetch(`${API}/${id}`, { method: "PUT" });
    loadTodos();
  };

  const deleteTodo = async (id) => {
    await fetch(`${API}/${id}`, { method: "DELETE" });
    loadTodos();
  };

  return (
    <div>
      <h2>My Todos</h2>
      {todos.length === 0 && <p>No todos yet. Add one!</p>}
      <ul>
        {todos.map((todo) => (
          <li key={todo._id}>
            <span
              onClick={() => toggleTodo(todo._id)}
              className={todo.done ? "done" : ""}
            >
              {todo.title}
            </span>
            <button onClick={() => deleteTodo(todo._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
