import React, {useContext} from 'react';
import {MoviesContext} from "./MoviesContext";

const Nav = () => {
    const state=useContext(MoviesContext);
    return(<div>
        <h1>Neetu</h1>
        <h2>List of Movies :{state.movies.length}</h2>
    </div>)
}
export default Nav;