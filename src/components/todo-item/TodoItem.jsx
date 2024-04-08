import style from "./TodoItem.module.css";

export function TodoItem(props) {
  const {
    todo: { id, content, checked },
  } = props;
  return (
    <div className={style.item}>
      <div className={style.content}>
        <input type="checkbox" checked={checked} />
        {content}
      </div>
      <div>
        <button>Edit</button>
        <button>Delete</button>
      </div>
    </div>
  );
}
