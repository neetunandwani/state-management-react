import React, {useEffect, useState} from 'react';
import MovieList from './MovieList';
import './App.css';
import Nav from "./Nav";
import AddMovie from './AddMovie'
import {MoviesProvider} from "./MoviesContext";
import {ClassComponent} from "./ClassComponent";

function App(props) {
    const [state, setState]= useState({s:'s'});

    useEffect(()=>{
        console.log("comoponentdidmouunt");
    }
    ,[])
    return (
        <MoviesProvider>
            <div className="App">
                <Nav/>
                <MovieList/>
                <AddMovie/>
                <ClassComponent value="test"  />
            </div>
         </MoviesProvider>
    )
}

export default App;
