export default function TodoItem({ toDos, todo, setTodos }) {

    function handleDelete(id) {
        setTodos(toDos.filter((todo) => todo.id !== id));
    }

    function toggleToDo(id, checked) {
        setTodos((prevToDos) => prevToDos.map(todo => {
            if (todo.id === id)
                return { ...todo, checked: checked }
            return todo;
        }
        ));
    }

    return (<li>
        <label>
            <input type="checkbox" checked={todo.checked} onChange={e => toggleToDo(todo.id, e.target.checked)} />
            {todo.title}
        </label>
        <button onClick={() => handleDelete(todo.id)} className="btn btn-danger">Delete</button>
    </li>);
}