import "./App.css";
import { TodoForm } from "./components/TodoForm";
import { TodoItem } from "./components/TodoItem";

function App() {
  return (
    <div>
      <h1>To Do List</h1>
      <TodoForm />
      <TodoItem />
    </div>
  );ß
}

export default App;
