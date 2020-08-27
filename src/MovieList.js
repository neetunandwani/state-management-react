import React, {useContext, useEffect} from 'react';
import {MoviesContext} from "./MoviesContext";
import Movie from "./Movie";

const MovieList = () => {
    const state=useContext(MoviesContext);

    return (
        <div>
            {state.movies.map((movie)=>(<Movie name={movie.name} id={movie.id} index={movie.index} key={movie.index}/>))
            }

        </div>
    );
}

export default MovieList;
