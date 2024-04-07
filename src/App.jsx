import { useState } from "react";
import "./App.css";
import { TodoList } from "./components/todo-list";

function App() {
  const [todos] = useState([
    {
      id: 1,
      checked: false,
      content: "this is a test todo",
    },
    {
      id: 2,
      checked: false,
      content: "this is a test todo",
    },
    {
      id: 3,
      checked: true,
      content: "this is a test todo",
    },
    {
      id: 4,
      checked: false,
      content: "thi todo",
    },
  ]);
  return (
    <div>
      <h1>To Do List</h1>
      <TodoList todos={todos} />
    </div>
  );
  ß;
}

export default App;
