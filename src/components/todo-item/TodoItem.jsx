import style from "./TodoItem.module.css";

export function TodoItem({
  todo: { id, content, checked },
  onDelete,
  onToggle,
}) {
  return (
    <div className={style.item}>
      <div className={style.content}>
        <input
          type="checkbox"
          checked={checked}
          onChange={() => onToggle(id)}
        />
        {content}
      </div>
      <div>
        <button>Edit</button>
        <button
          onClick={() => {
            onDelete(id);
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
