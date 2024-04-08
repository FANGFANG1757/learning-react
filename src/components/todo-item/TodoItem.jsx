import style from "./TodoItem.module.css";

export function TodoItem({ todo: { id, content, checked }, deleteTodo }) {
  return (
    <div className={style.item}>
      <div className={style.content}>
        <input type="checkbox" checked={checked} />
        {content}
      </div>
      <div>
        <button>Edit</button>
        <button
          onClick={() => {
            deleteTodo(id);
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
