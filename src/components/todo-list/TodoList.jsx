import { TodoItem } from "../todo-item";
import style from "./TodoList.module.css";

export function TodoList(props) {
  const { todos } = props;
  return (
    <ul className={style.list}>
      <li>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            checked={todo.checked}
            content={todo.content}
          />
        ))}
      </li>
    </ul>
  );
}
