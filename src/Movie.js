import React, { useContext} from 'react';
import {MoviesContext} from "./MoviesContext";

const Movie = ({name, id, index}) => {
    const state = useContext(MoviesContext);
    return (
        <div>
            <h3>{name}</h3>
            <h3>{id}</h3>

            <button onClick={()=>state.removeMovie(index)}>Remove</button>
        </div>
    );
}

export default Movie;
