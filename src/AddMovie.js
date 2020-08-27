import React, {useContext, useEffect, useReducer, useState} from "react";
import {MoviesContext} from "./MoviesContext";
import {useMovie} from "./useMovie";


const AddMovie = () => {
    const [name, setName] = useState('');
    const [id, setId] = useState('');
    const state = useContext(MoviesContext);
    const [movie,setMovie] = useMovie()
    useEffect(()=>{ state.addMovie(movie)},[])
    const updateName = (e) => {
        setName(e.target.value);
    }
    const updateId = (e) => {
        setId(e.target.value);
    }
    const addMovie=(e)=>{
        e.preventDefault();
        state.addMovie({name:name, id:id})
    }
    return (
        <form>
            <input type='text' name='name' value={name} onChange={updateName}/>
            <input type='text' name='id' value={id} onChange={updateId}/>
            <button onClick={addMovie}> Submit</button>
        </form>
    )
}
export default AddMovie;