import { useState } from "react";
import "./App.css";
import { TodoList } from "./components/todo-list";
import { TodoForm } from "./components/todo-form";

function App() {
  const [todos, setTodos] = useState([]);

  function addTodo(content){
  
    setTodos([
      ...todos,
      { id: crypto.randomUUID(), content, completed: false },
    ]);
  }

  return (
    <div>
      <h1>To Do List</h1>
      <TodoForm onSubmit={addTodo}/>
      <TodoList todos={todos} />
    </div>
  );
  ß;
}

export default App;
