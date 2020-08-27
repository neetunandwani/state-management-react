import {useEffect, useState} from "react";

export const useMovie=()=>{

    const [movie,setMovie] = useState({name:'abc', id:'1004',index:5});
    useEffect(()=>{
        console.log("running");
        return (()=>console.log("cleanup"));
    },[])   ;
    return [movie,setMovie];
}