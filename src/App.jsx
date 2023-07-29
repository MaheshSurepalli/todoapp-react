import { useEffect, useState } from "react";
import NewToDoForm from "./NewToDoForm";
import "./styles.css";
import ToDoList from "./ToDoList";

export default function App() {

  const [toDos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  useEffect(() => { localStorage.setItem("todos", JSON.stringify(toDos)) }, [toDos]);


  return <><NewToDoForm setTodos={setTodos} />
    <h1 className="header">To Do List</h1>
    <ToDoList toDos={toDos} setTodos={setTodos} />
  </>
}