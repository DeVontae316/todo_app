import React, { useState, useEffect } from 'react';
import List from "./components/List";
import { Provider } from './context/Provider';
import { v4 as uuidv4 } from 'uuid';

import './App.css'
import Modal from './components/Modal';

function App() {
  const [todo, setToDo] = useState('');

  const [list, setList] = useState(() => {
    try {
      // Get from local storage by key
      const item = window.localStorage.getItem("todo");
      // Parse stored json or if none return initialValue
      return item ? JSON.parse(item) : [];
    } catch (error) {
      // If error also return initialValue
      console.log(error);
      return [];
    }
  });
  const [clear, setClear] = useState(false);
  const [id, setId] = useState(0);
  const [modal, setModal] = useState(false);
  const [modalId, setModalId] = useState(false);


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
  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(list));

  }, [list])
  return (
    <Provider.Provider value={{
      list,
      setList,
      modal,
      setModal,
      modalId,
      setModalId,


    }}>
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



    </Provider.Provider>
  );
}

export default App;
