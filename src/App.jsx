import { useState } from "react";
import "./App.css";
import { TodoList } from "./components/todo-list";
import { TodoForm } from "./components/todo-form";

function App() {
  const [todos, setTodos] = useState([]);

  function handleAddTodo(content) {
    setTodos([
      ...todos,
      { id: crypto.randomUUID(), content, completed: false },
    ]);
  }
  function handleDeleteTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }
  function handleToggleTodo(id) {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }

  return (
    <div>
      <h1>To Do List</h1>
      <TodoForm onSubmit={handleAddTodo} />
      <TodoList todos={todos} onDelete={handleDeleteTodo} onToggle={handleToggleTodo} />
    </div>
  );
}

export default App;
