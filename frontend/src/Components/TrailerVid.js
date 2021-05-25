import React from 'react'

export default function TrailerVid(props) {
    return (
        <div style={{backgroundColor:"black"}}>
            <iframe style={{marginLeft:'60px'}} width="1400" height="720" src={props.link} title="YouTube video player" frameborder="0" allow="accelerometer; 
            autoplay; clipboard-write; encrypted-media;
             gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    )
}
