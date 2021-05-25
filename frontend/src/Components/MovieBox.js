import React from 'react'
import {Card} from "react-bootstrap"

const MovieBox = (props) => {
    return (
        <Card style={{height:'350px',width: '303.5px',marginTop: '60px',display:"inline-block"
        ,backgroundColor:"#241142"}}>
            <Card.Img variant="top" style={{height:'200px'}} src={props.img} />
            <Card.Body>
                <Card.Title style={{color:"gold",textAlign:"center"}}>{props.title}</Card.Title>
                <Card.Text style={{color:"wheat"}}>
                {props.description}
                </Card.Text>
            </Card.Body>
            <Card.Body>
                <Card.Link href={`/Add_review/${props.id}`} style={{backgroundColor:"#241142"}}>Add Review</Card.Link>
                <Card.Link href={`/All_reviews/${props.id}`} style={{backgroundColor:"#241142"}}>View All Reviews</Card.Link>
            </Card.Body>
        </Card>
    )
}

export default MovieBox
