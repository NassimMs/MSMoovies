import React,{useEffect, useState} from 'react'
import NavBar from './Navbar'
import Axios from "axios"
import MovieBoxBigger from './MovieBoxBigger'
import Review from './review'

export default function All_reviews(props) {
    const [idmovie,setidmovie] = useState()
    const [movieName,setmoviename] = useState()
    const [movieImg,setmovieimg] = useState()
    const [moviedesc,setmoviedesc] = useState()
    const [reviewslist,setreviewslist] = useState([])

    useEffect(() => {
        Axios.get(`http://localhost:3001/api/get/movies/${props.match.params.id}`).then((response) =>{
            //console.log(response.data)
            setidmovie(response.data[0].idmovies)
            setmoviename(response.data[0].movie_name)
            setmovieimg(response.data[0].movie_img)
            setmoviedesc(response.data[0].movie_description)
        }) 
        Axios.get(`http://localhost:3001/api/get/reviewslist/${props.match.params.id}`).then((response) =>{
        console.log(response.data)
        setreviewslist(response.data)
        }) 
   }, [props.match.params.id]);

    return (
        <div>
              <NavBar></NavBar>
              <MovieBoxBigger id={idmovie}  img={movieImg} title={movieName}
                 description={moviedesc}>
                 </MovieBoxBigger>
              <div className="reviews-container" style={{position:'absolute',top:'-20px',left:'500px',marginTop:"100px"}}> 
              {reviewslist.map((val)=>{
                return <Review name={val.useremail} text={val.movie_review} date={val.review_date}></Review>
            })}
              </div>   
        </div>
    )
}
