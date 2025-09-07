import {useContext , createContext} from 'react';

export const TodoContext = createContext({
    todo : [
        {
            id : 1,
            title : "todo msg",
            checked : false,
        }
    ],
    addTodo : (title) =>{},
    deleteTodo : (id) =>{},
    updateTodo : (id , title) =>{},
    toggleTodo : (id) =>{},
})

export const useTodo = () =>{
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider

