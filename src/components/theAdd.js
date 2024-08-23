import React, { useContext, useState } from "react";
import TheContext from "../theStore/myContext";

export const AddTodo = () => {
    const { addTodo } = useContext(TheContext);
    const [ input, setInput ] = useState('');

    const handleChange = (e) => {
        setInput(e.target.value);
    };
    const handleClick = () => {
        if (!input) {
            alert('please enter a todo!')
        };
        addTodo(input);
        setInput('');
    };
     
    return(
        <div className="myfooter">
            <input
            value={input}
            placeholder="Enter a new todo...."
            onChange={handleChange}
            />
            <button onClick={handleClick}>
                Add
            </button>
        </div>
    );
};