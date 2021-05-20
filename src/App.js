import React, { useState, useEffect } from 'react';
import List from "./components/List";
import { Provider } from './context/Provider';
import { v4 as uuidv4 } from 'uuid';

import './App.css'
import Modal from './components/Modal';
import { AppContextProvider } from './AppContext/AppContext';
import { GlobalContext } from './AppContext/AppContext'

function App() {
  const [todo, setToDo] = useState('');
  const { list, setList, clear, setClear } = GlobalContext();




  const handleChange = (e) => {
    setClear(false);
    setToDo(e.target.value);
  }
  const onSubmit = (e) => {
    e.preventDefault();
    setList([...list, { id: uuidv4(), task: todo, style: "not-done" }]);
    setClear(true);


    console.log("list below:");
    console.log(list);
    console.log(todo);
  }

  return (


    <div className="main-container">

      <form onSubmit={onSubmit}>
        <h1>My To Do List</h1>
        <div className="input-todo-container">
          <input
            type="text"
            value={clear ? '' : todo}
            onChange={(e) => handleChange(e)}
          />
          <button className="submit-btn" type="submit">Add To List</button>
        </div>
      </form>
      <List list={list} />
      <Modal />
    </div>





  );
}

export default App;
