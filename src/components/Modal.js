import React, { useContext, useEffect, useState } from 'react';
import { Provider } from '../context/Provider';
import { GlobalContext } from '../AppContext/AppContext'

function Modal(props) {
    const { list, setList, modal, setModal, modalId } = GlobalContext();
    const [edit, setEdit] = useState('');
    const position = modal ? "modal-container modal-transition" : "modal-container";

    const handleSave = () => {
        const editList = list.map((task) => {
            if (task.id === modalId) {
                task.task = edit;
                console.log('new task' + task)
            }
            return task;



        });
        setList([...editList])
        setModal(false);
        console.log("edit saved");
        console.log(edit);
    }

    useEffect(() => {
        if (modal) {
            document.body.classList.add("edit-mode");

        }

        return () => {
            document.body.classList.remove("edit-mode");
        }
    }, [modal])
    return console.log(list) || (

        <section className={position}>
            {modal ? (
                <div className="modal">
                    <h2>Edit Task</h2>
                    <div className="text-area">
                        <textarea onChange={(e) => setEdit(e.target.value)} />
                    </div>
                    <div className="btn-container">
                        <button className="save-btn" onClick={handleSave}>Save</button>
                        <button className="cancel-btn" onClick={() => setModal(false)}>Cancel</button>
                        {/*    {modalId + ' id being edited'} */}

                    </div>
                </div>
            ) : null}


        </section>
    );
}

export default Modal;