import React, { useState } from "react";

export const TodoList = () => {
  const [newInput, setNewInput] = useState("");
  const [todos, setTodos] = useState([]);

  const addTodo = (e) => {
    e.preventDefault();
    if (newInput.trim() !== "") {
      setTodos([
        ...todos,
        { id: crypto.randomUUID(), completed: false, title: newInput },
      ]);
    }
    setNewInput("");
  };
 

  return (
    <div>
      <h1>To Do List</h1>
      <form className="todo-form" onSubmit={addTodo}>
        <input
          className="todo-input"
          type="text"
          placeholder="Add a new todo"
          value={newInput}
          onChange={(e) => {
            setNewInput(e.target.value);
          }}
        />
        <button className="input-btn">Add</button>
      </form>
      <div>
        <ul className="todo-list">
          {todos.map((todo) => {
            return (
              <li className="list-item" key={todo.id}>
                <div className="todo-item">
                  <input
                    type="checkbox"
                    checked={todo.completed}
    
                  />
                  {todo.title}
                </div>
                <button className="edit-btn">Edit</button>
                <button className="delete-btn">Delete</button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
