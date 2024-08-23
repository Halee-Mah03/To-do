import { useState } from "react";

const useTodos = () => {
    const [todos, setTodos] = useState([]);
    
    const addTodo = (todo) => {
        setTodos((prevTodos) => {

            const newTodo = {
                id: prevTodos.length + 1,
                todo,
                done: false,
            };
            return [...prevTodos, newTodo];
        });
    };

    const updateTodos = (todo) => {
        setTodos((prevTodo) => {
            const newTodos = prevTodo.map((item) => {
                if (item.id === todo.id) {
                    return {
                        ...item,
                        done: !item.done,
                    };
                }
                return item;
            });
            return newTodos;
        });
    };
    
    
    return { todos, addTodo, updateTodos};
};
 
export default useTodos;