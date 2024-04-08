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

  return (
    <div>
      <h1>To Do List</h1>
      <TodoForm onSubmit={handleAddTodo} />
      <TodoList todos={todos} onDelete={handleDeleteTodo} />
    </div>
  );
}

export default App;
