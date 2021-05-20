import React, { useState, useContext } from 'react';
import { Provider } from '../context/Provider';
import { GlobalContext } from '../AppContext/AppContext';
import { MdEdit } from 'react-icons/md';
import { RiDeleteBin6Line } from 'react-icons/ri';

function List() {
    const [btn, setBtn] = useState();
    const [id, setId] = useState('');

    const {
        list,
        setList,
        setModal,
        setModalId,

    } = GlobalContext();

    const handleEdit = (id) => {
        setModal(true);
        setModalId(id);
        console.log("id below:")
        console.log(id);
    }

    const handleDelete = (id) => {
        const deletedItem = list.filter(todo => todo.id !== id);
        setList([...deletedItem]);
    }

    const handleClick = (id, e) => {
        /*  const newList = list.map((todo) => {
             if (todo.id === id) {
                 todo.style = "cross-out"
 
             }
             return todo;
         }); */
        console.log("value below:");
        console.log(e.target.value = false);


        setId(id);
        /*  setList([...newList]); */
    }

    return console.log(btn) || (
        <div >
            {list.length > 0 && list.map((todo, index) => {
                const style = id === todo.id ? "done-todo-wrapper" : "todo-wrapper";
                const pStyle = id === todo.id ? "cross-out" : "";
                return (
                    <section key={todo.id} className={style}>
                        <label >

                            <input onClick={(e) => handleClick(todo.id, e)} onChange={(e) => {
                                setBtn(e.target.value);

                            }
                            } className="checkbox-input" type="radio"
                            />

                            <p className={pStyle}>{todo.task}</p>


                        </label>
                        <div className="icon-wrapper">
                            <div onClick={() => handleEdit(todo.id)} className="edit-icon">
                                <MdEdit />
                            </div>
                            <div onClick={() => handleDelete(todo.id)} className="delete-icon">
                                <RiDeleteBin6Line />
                            </div>
                        </div>

                    </section>

                )
            })}
        </div>
    );
}

export default List;