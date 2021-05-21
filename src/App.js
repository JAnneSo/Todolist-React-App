import Todolist from "./components/Todolist";
import { nanoid } from 'nanoid';
import { useState, useEffect } from "react";
import StorageService from "./services/StorageService";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import DarkModeToggle from './components/DarkModeToggle';

function App() {
  const [todolists, setTodolists] = useState([]);

  useEffect(() => {
    const data = StorageService.getTodolists();
    setTodolists(data);
  }, [])

  useEffect(() => {
    StorageService.saveTodolists(todolists);
  }, [todolists])

  function updateTodo(todoUpdated) {
    let pos = todolists.findIndex((todo => todo.id === todoUpdated.id));
    if (pos > -1) {
      todolists.splice(pos, 1, todoUpdated);
      setTodolists([...todolists]);
    }
  }

  function addList(params) {
    const newList = {
      id: nanoid(),
      title: "Nouvelle liste",
      tasks: []
    }
    setTodolists([newList, ...todolists]);
  }

  function deleteTodo(todoDeleted) {
    let pos = todolists.findIndex((todo) => todo.id === todoDeleted.id);
    if (pos > -1) {
      todolists.splice(pos, 1);
      setTodolists([...todolists]);
    }
  }

  return (
    <main>
      <header>
        <h1>TodoApp</h1>
        <div>
          <button className="createList-btn" onClick={addList}>Créer une liste<FontAwesomeIcon icon={faEdit} /></button>
          <DarkModeToggle />
        </div>
      </header>
      <div className="todolist-container">
        {todolists.map((todo) => (
          <Todolist key={todo.id} todo={todo} updateTodo={updateTodo} deleteTodo={deleteTodo} />
        ))}
      </div>
    </main>
  );
}

export default App;

