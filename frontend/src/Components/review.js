import React from 'react'
import Userimg from '../Ressources/user.png'

const Review = (props) => {
    //console.log(props);
    return (
        <div className='review' style={{top:'100px',left:"500px"}}>
                <a href="/" className='avatar'>
                    <img style={{width:'80px',height:'80px'}} id="pic" src={Userimg} alt="profile"></img>
                </a>
                <div className='content'>
                    <a href="/" className='author' style={{position:'absolute',marginLeft:"100px",marginTop:'-50px'}}>{props.name}</a>
                    <div className='metadata'>
                        <span className='date' style={{color:'#c6c4c4'}}>Today at {props.date}</span>
                    </div>
                    <div className="text">
                        {props.text}
                    </div>
                </div>
            <hr></hr>
        </div>
        
    )
}

export default Review;
