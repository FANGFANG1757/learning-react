import { useState } from "react";
import "./App.css";
import { TodoList } from "./components/todo-list";
import { TodoForm } from "./components/todo-form";

function App() {
  const [todos, setTodos] = useState([]);
  const [currentEditTodoId, setCurrentEditTodoId] = useState(null);
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
  function handleEdit(id, newContent) {
    setTodos(
      todos.map((todo) =>
        id === todo.id ? { ...todo, content: newContent } : todo
      )
    );
  }

  function handleSetCurrentTodoId(id) {
    setCurrentEditTodoId(id);
  }

  return (
    <div>
      <h1>To Do List</h1>
      <TodoForm onSubmit={handleAddTodo} />
      <TodoList
        todos={todos}
        onDelete={handleDeleteTodo}
        onToggle={handleToggleTodo}
        onEdit={handleEdit}
        currentEditTodoId={currentEditTodoId}
        onSetCurrentTodoId={handleSetCurrentTodoId}
      />
    </div>
  );
}

export default App;
