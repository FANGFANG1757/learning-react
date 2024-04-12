import { useState, useEffect } from "react";
import style from "./TodoItem.module.css";

export function TodoItem({
  todo: { id, content, checked },
  onDelete,
  onToggle,
  onSubmit,
  isEditing,
  onEdit,
  onCancel,
}) {
  const [editTodo, setEditTodo] = useState(content);

  function handleSave() {
    onSubmit(id, editTodo);
    onCancel(null);
  }

  useEffect(() => {
    if (!isEditing) {
      setEditTodo(content);
    }
  }, [isEditing]);

  return (
    <div className={style.item}>
      <div className={style.content}>
        <input
          type="checkbox"
          checked={checked}
          onChange={() => onToggle(id)}
        />
        {isEditing ? (
          <input
            type="text"
            value={editTodo}
            onChange={(e) => {
              setEditTodo(e.target.value);
            }}
          />
        ) : (
          content
        )}
      </div>

      {isEditing ? (
        <div>
          <button onClick={handleSave}>Save</button>
          <button
            onClick={() => {
              onCancel(null);
            }}
          >
            Cancel
          </button>
        </div>
      ) : (
        <div>
          <button
            onClick={() => {
              onEdit(id);
            }}
          >
            Edit
          </button>

          <button
            onClick={() => {
              onDelete(id);
            }}
          >
            Delete
          </button>
        </div>
      )}
    </div>
  );
}
