import EditableField from "./EditableField";
import TodoForm from "./TodoForm";
import TodoItems from "./TodoItems";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

function Todolist(props) {
    const tasks = props.todo.tasks;
    const title = props.todo.title;

    function addTask(newTask) {
        props.updateTodo({ ...props.todo, tasks: [...tasks, newTask] });
    }

    function updateTask(taskUpdated) {
        let pos = tasks.findIndex((task => task.id === taskUpdated.id));
        if (pos > -1) {
            tasks.splice(pos, 1, taskUpdated);
            props.updateTodo({ ...props.todo, tasks: [...tasks] });
        }
    }

    function deleteTask(taskDeleted) {
        let pos = tasks.findIndex((task => task.id === taskDeleted.id));
        if (pos > -1) {
            tasks.splice(pos, 1);
            props.updateTodo({ ...props.todo, tasks: [...tasks] });
        }
    }

    function changeTitle(newTitle) {
        props.updateTodo({ ...props.todo, title: newTitle });
    }
    function deleteTodo(params) {
        props.deleteTodo(props.todo);
    }
    return (
        <div className="todolist">
            <div className="todolist__header">
                <h2 className="todolist__header--title"><EditableField value={title} onNewValue={changeTitle} /></h2>
                <button onClick={deleteTodo} className="todolist__header--delete-btn"><FontAwesomeIcon icon={faTrashAlt} /></button>
            </div>

            <TodoForm addTask={addTask} />
            <TodoItems tasks={tasks} updateTask={updateTask} deleteTask={deleteTask} />
        </div>
    );
}

export default Todolist;