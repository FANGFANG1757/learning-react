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

  const updateTodoList = (targetId, updateFn) => {
    setTodos(todos.map((todo) => (targetId === todo.id ? updateFn(todo) : todo)));
  };

  function handleToggleTodo(id) {
    updateTodoList(id, (todo) => ({ ...todo, completed: !todo.completed }));
  }
  function handleEdit(id, newContent) {
    updateTodoList(id, (todo) => ({ ...todo, content: newContent }));
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
        onSubmit={handleEdit}
        currentEditTodoId={currentEditTodoId}
        onEdit={handleSetCurrentTodoId}
        onCancel={()=>handleSetCurrentTodoId(null)}
      />
    </div>
  );
}

export default App;
