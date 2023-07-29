import TodoItem from "./TodoItem";

export default function ToDoList({ toDos, setTodos }) {

    return (<ul className="list">
        {toDos.map(todo => {
            return (<TodoItem key={todo.id} toDos={toDos} todo={todo} setTodos={setTodos} />)
        }
        )}
    </ul>);
}