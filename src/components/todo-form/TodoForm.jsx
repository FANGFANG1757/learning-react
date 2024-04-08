import style from "./TodoForm.module.css";
import { useState } from "react";

export function TodoForm(onSubmit) {
  const [newTodo, setNewTodo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTodo === "") {
      return;
    }
    onSubmit(newTodo);
    setNewTodo("");
  };

  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <input
        className={style.input}
        type="text"
        placeholder="Add a new todo"
        value={newTodo}
        onChange={(e) => {
          setNewTodo(e.target.value);
        }}
      />
      <button>Add</button>
    </form>
  );
}
