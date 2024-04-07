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
        <button className="edit-btn">Edit</button>
        <button className="delete-btn">Delete</button>
      </div>
    </div>
  );
}
