import Navbar from "./Navbar"
import back from "../Ressources/bg.jpg"
import React,{useEffect, useState} from 'react'
import MovieBox from "./MovieBox"
import Axios from "axios"


export default function MoviesList() {
    const [movieList,setMovieList] = useState([])

    useEffect(() => {
        Axios.get('http://localhost:3001/api/get/movies').then((response) =>{
            console.log(response.data)
            setMovieList(response.data)
        }) 
   }, [])


    return (
        <div style={{backgroundImage:`url(${back})`}}>
             <Navbar></Navbar>
            {movieList.map((val)=>{
                return <MovieBox img={val.movie_img} title={val.movie_name}
                 description={val.movie_description} id={val.idmovies}>
                 </MovieBox>
            })}
            <br/>  
            <h3 style={{textAlign:"center",backgroundColor:"red",color:"white"}}>More Movies will be added soon ...</h3>           
        </div>
    )
}
