//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import EditableField from "./EditableField";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

function TodoItem(props) {
    const task = props.task;
    function onCheck(event) {
        props.updateTask({ ...task, isDone: !task.isDone });
    }
    function onDelete() {
        props.deleteTask(task);
    }
    function onNewValue(value) {
        props.updateTask({ ...task, title: value })
    }
    return (
        <li className="todolist-item">
            <input type="checkbox" className="todolist-item__ckbx" id={task.id} defaultChecked={task.isDone} onChange={onCheck} />
            <label className="todolist-item__label" htmlFor={task.id}>
                <EditableField editMode={false} value={task.title} onNewValue={onNewValue} />
            </label>
            <button type="button" title="Supprimer cette tâche" onClick={onDelete} className="delete-btn"><FontAwesomeIcon icon={faTimes} /></button>
        </li>
    );
}

export default TodoItem;