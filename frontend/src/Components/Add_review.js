import React,{useEffect, useState} from 'react'
import NavBar from './Navbar'
import Axios from "axios"
import MovieBoxBigger from './MovieBoxBigger'
import {useAuth} from "../contexts/AuthContext"
import {Form,Button} from "react-bootstrap"

export default function Add_review(props) {
    const { CurrentUser } = useAuth()
    const Useremail = CurrentUser.email
    const [idmovie,setidmovie] = useState()
    const [movieName,setmoviename] = useState()
    const [movieImg,setmovieimg] = useState()
    const [moviedesc,setmoviedesc] = useState()
    const [review,setreview] = useState('')

    useEffect(() => {
        Axios.get(`http://localhost:3001/api/get/movies/${props.match.params.id}`).then((response) =>{
            console.log(response.data)
            setidmovie(response.data[0].idmovies)
            setmoviename(response.data[0].movie_name)
            setmovieimg(response.data[0].movie_img)
            setmoviedesc(response.data[0].movie_description)
        }) 
   }, [props.match.params.id]);

   const submitReview = () =>{
        Axios.post('http://localhost:3001/api/post/review/',{review:review,email:Useremail,movieid:idmovie}).then(()=>{
            alert("Thank you for adding your review")
        });
   }

    return (
        <div>
              <NavBar></NavBar>
              <div style={{border:"5px solid",width:"700px",height:"600px",position:"absolute"
            ,top:'100px',left:'500px',borderRadius:"10%",borderColor:"gold",borderStyle:"groove"}}>
                <h1 style={{textAlign:'center',marginTop:"10px"}}>Add a Review</h1>
              <Form style={{position:"absolute",top:'100px',left:"80px"}}>
              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Movie Review :</Form.Label>
                <Form.Control name="review" style={{width:"400px",resize:"none"}} as="textarea" rows={3} onChange={(e)=>{
                    setreview(e.target.value)
                }} />
              </Form.Group>
              <br></br>
              <h5>Share your opinion with us !</h5>
              <input name="opinion" type="radio"></input>
              <label style={{paddingLeft:"10px"}}>Good film</label>
              <input name="opinion" style={{marginLeft:"20px"}} type="radio"></input>
              <label style={{paddingLeft:"10px"}}>Bad film</label>
              <br/>
              <Button onClick={submitReview} style={{marginTop:"50px"}} variant="primary" type="submit">
                Submit Review
            </Button>
              </Form>
            </div>
              <MovieBoxBigger id={idmovie} img={movieImg} title={movieName}
                 description={moviedesc}>
                 </MovieBoxBigger>
        </div>
    )
}
