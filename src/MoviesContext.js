import React, {createContext, useReducer} from 'react';
import {ADD_MOVIE, MovieReducer, REMOVE_MOVIE} from "./reducers/MovieReducer";

export const MoviesContext = createContext();

export const MoviesProvider = (props) => {
    const initialState = [
        {
            name: "harry porter",
            id: '10001',
            index: 1
        },
        {
            name: "test",
            id: '1002',
            index: 2
        }
    ]
    const [state, dispatch] = useReducer(MovieReducer, initialState)

    const addMovie = (movie) => {
        dispatch({type: ADD_MOVIE, payload: movie})
    }
    const removeMovie = (id) => {
        dispatch({type: REMOVE_MOVIE, payload: id})
    }

    return (<MoviesContext.Provider value={{movies: state, addMovie: addMovie, removeMovie: removeMovie}}>
        {props.children}
    </MoviesContext.Provider>)
}

