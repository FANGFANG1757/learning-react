export function TodoItem() {
  return (
    <div>
      <ul className="todo-list">
        <li className="list-item">
          <div className="todo-item">
            <input type="checkbox" />
            Todo Item 1
          </div>
          <button className="edit-btn">Edit</button>
          <button className="delete-btn">Delete</button>
        </li>
        <li className="list-item">
          <div className="todo-item">
            <input type="checkbox" />
            Todo Item 2
          </div>
          <button className="edit-btn">Edit</button>
          <button className="delete-btn">Delete</button>
        </li>
        <li className="list-item">
          <div className="todo-item">
            <input type="checkbox" />
            Todo Item 3
          </div>
          <button className="edit-btn">Edit</button>
          <button className="delete-btn">Delete</button>
        </li>
        <li className="list-item">
          <div className="todo-item">
            <input type="checkbox" />
            Todo Item 4
          </div>
          <button className="edit-btn">Edit</button>
          <button className="delete-btn">Delete</button>
        </li>
      </ul>
    </div>
  );
}
