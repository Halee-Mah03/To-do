import { createContext } from "react";

const TheContext = createContext ([
    {
        id: 1,
        todo: "Bible Study by 11am",
        done: true,
    },
])

export default TheContext;