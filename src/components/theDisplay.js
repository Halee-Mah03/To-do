import React, { useContext, useState } from "react";
import TheContext from "../theStore/myContext";
import PropTypes from 'prop-types';

export const Todos = ({item}) => {
    const { updateTodos} = useContext(TheContext);
    const [lineThrough, setLineThrough] = useState(false);
   

    const handleSubmit = () => {
        setLineThrough(!lineThrough);
        updateTodos(item);
    };


    const mystyle = {
        textDecoration: lineThrough ? "line-through" : item.done, 
    }

    return(
        <>
        <div className="mycontent" style={mystyle} >
            <button className="mycontents" onClick={handleSubmit} >
                <span className="thespan">
                    {!item.done && <img src="/dryclean.png" alt="checkmark" />}
                    {item.done && <img src="/check.png" alt="checkmark" />}
                </span>
            <p className="text">{item.todo}</p>
            </button>
            <button className="myadd">
                delete
            </button>
        </div>
        </>
    );
};

Todos.prototype = {
    item: {
    id: PropTypes.number.isRequired,
    todo: PropTypes.string.isRequired,
    done: PropTypes.bool,
    },
};