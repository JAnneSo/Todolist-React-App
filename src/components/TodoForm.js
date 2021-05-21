import { nanoid } from "nanoid";
import { useRef } from "react";

function TodoForm(props) {
    const inputRef = useRef();
    function submitForm(event) {
        event.preventDefault();
        const newTaskTitle = inputRef.current.value.trim();
        if (newTaskTitle.length === 0) return;
        const newTask = { id: nanoid(), title: newTaskTitle, isDone: false };
        props.addTask(newTask);
        inputRef.current.value = "";
    }
    return (
        <form className="todolist-form" onSubmit={submitForm}>
            <input type="text" placeholder="Nouvelle tâche" ref={inputRef} />
            <button type="submit">Ajouter</button>
        </form>
    );
}

export default TodoForm;