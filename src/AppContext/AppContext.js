import React, { createContext, useContext, useState, useEffect } from 'react';

const AppContext = createContext();
function AppContextProvider({ children }) {
    const [clear, setClear] = useState(false);
    const [modal, setModal] = useState(false);
    const [modalId, setModalId] = useState(false);
    const [list, setList] = useState(() => {
        try {

            const item = window.localStorage.getItem("todo");

            return item ? JSON.parse(item) : [];
        } catch (error) {

            console.log(error);
            return [];
        }
    });

    useEffect(() => {
        localStorage.setItem("todo", JSON.stringify(list));

    }, [list])
    return (
        <AppContext.Provider value={
            {
                clear,
                setClear,
                modal,
                setModal,
                modalId,
                setModalId,
                list,
                setList,

            }

        }>
            {children}
        </AppContext.Provider>
    );
}


export const GlobalContext = () => {
    return useContext(AppContext);
}
export { AppContextProvider, AppContext };