import style from "./TodoForm.module.css";
import { useState } from "react";

export function TodoForm(props) {
  const [newTodo, setNewTodo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTodo === "") {
      return;
    }
    props.onSubmit(newTodo);
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
