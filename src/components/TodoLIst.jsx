import { TodoForm } from "./TodoForm";
import { TodoItem } from "./TodoItem";

export function TodoList (){
    return(
        <div>
            <h1>
                To Do List
            </h1>
            <TodoForm/>
            <TodoItem/>
        </div>
    )
}