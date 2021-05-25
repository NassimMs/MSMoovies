import React,{useEffect, useState} from 'react'
import Axios from "axios"
import TrailerVid from './TrailerVid';
import NavBar from './Navbar'

export default function Trailer(props) {

    const [trailer,setTrailer] = useState()

    useEffect(() => {
        Axios.get(`http://localhost:3001/api/get/movies/${props.match.params.id}`).then((response) =>{
            console.log(response.data)
            setTrailer(response.data[0].movie_trailer)
        }) 
   }, [props.match.params.id]);
    return (
        <div>
            <NavBar></NavBar>
            <TrailerVid link={trailer}></TrailerVid>
        </div>
    )
}
