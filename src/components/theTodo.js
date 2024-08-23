import React from "react";
import { Todos } from "./theDisplay";

export const TheDisplayTodo = ({data = [] }) => {
    return (
        
      <div className="mycont">
            {data.map((item) => (
                <Todos item={item} />
            ))}
        </div>
        
    );
};