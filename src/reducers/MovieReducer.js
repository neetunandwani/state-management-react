import React, {useState} from "react";

export const ADD_MOVIE = 'ADD_MOVIE';
export const REMOVE_MOVIE = 'REMOVE_MOVIE';

export const MovieReducer = (state , action) => {
    switch (action.type) {
        case ADD_MOVIE: {
            let index = state.length
            action.payload.index = index + 1;
        }
            return [...state, action.payload];

            break
        case REMOVE_MOVIE:
            let index = state.findIndex(movie => movie.index === action.payload)
            state.splice(index, 1);
            return [...state];
            break
        default:
            return [...state];
    }
}