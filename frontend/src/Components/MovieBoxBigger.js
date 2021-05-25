import React from 'react'
import {Card} from "react-bootstrap"

const MovieBoxBigger = (props) => {
    return (
        <Card style={{height:'700px',width: '400.5px',marginTop: '60px',display:"inline-block"
        ,backgroundColor:"black"}}>
            <Card.Img variant="top" style={{height:'240px'}} src={props.img} />
            <Card.Body>
                <Card.Title style={{color:"gold",textAlign:"center"}}>{props.title}</Card.Title>
                <hr style={{color:'red',height:'7px'}}></hr>
                <br/>   
                <Card.Text style={{color:"wheat"}}>
                {props.description}
                </Card.Text>
            </Card.Body>
            <Card.Body>
                <Card.Link href={`/Trailer/${props.id}`} style={{backgroundColor:"#2c1215",fontSize:'30px'}}><i>Check Trailer</i></Card.Link>
            </Card.Body>
        </Card>
    )
}

export default MovieBoxBigger
