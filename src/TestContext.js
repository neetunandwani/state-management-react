import React, {createContext, useReducer, useState} from "react";
import {MovieReducer} from "./reducers/MovieReducer";

const Context = createContext();
const [state, dispatch] = useReducer(MovieReducer, {});
const [provider, setProvider] = useState({s: 's'});

return <Context.Provider value={{provider: provider, state: state}}></Context.Provider>
