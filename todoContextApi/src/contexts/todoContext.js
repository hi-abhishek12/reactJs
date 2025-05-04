import { createContext , useContext } from "react"; 

export const TodoContext  = createContext({
    todos : [
        {
            id : 1,
            todoTitle : 'todo msg',
            completed : false
        }
    ],

    addTodo : (todoTitle) => {},
    updateTodo : (todoTitle , id) => {},
    removeTodo : (id) =>{},
    toogleComplete : (id) =>{}
    
})

export const useTodo = () =>{
    return useContext(TodoContext)
}
export const TodoProvider = TodoContext.Provider