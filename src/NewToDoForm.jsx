import { useState } from "react";

export default function NewToDoForm({ setTodos }) {
    const [newItem, setNewItem] = useState("")
    function handleSubmit(e) {
        e.preventDefault();
        setTodos((prevToDos) => [...prevToDos, { id: crypto.randomUUID(), title: newItem, checked: false }]);
        setNewItem("")
    }


    return <form onSubmit={handleSubmit} className="new-item-form">
        <div className="form-row">
            <label htmlFor="item">New Item</label>
            <input type="text" value={newItem} onChange={e => setNewItem(e.target.value)} id="item" />
        </div>
        <button className="btn">Add</button>
    </form>
}