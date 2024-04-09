import { TodoItem } from "../todo-item";
import style from "./TodoList.module.css";

export function TodoList({ onDelete, onToggle, todos }) {
  return (
    <ul className={style.list}>
      <li>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onDelete={onDelete}
            onToggle={onToggle}
          />
        ))}
      </li>
    </ul>
  );
}
