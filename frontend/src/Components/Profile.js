import React, {useState} from 'react'
import {Card , Button, Alert, Container} from "react-bootstrap"
import { Link, useHistory } from 'react-router-dom'
import {useAuth} from "../contexts/AuthContext"
import back from "../Ressources/bg.jpg"
import Navbar from "./Navbar"



export default function Profile() {
    const {CurrentUser, logout} = useAuth()
    const [error,setError] = useState("")
    const history = useHistory()
    const UserEmail = CurrentUser ? CurrentUser.email : ""

    async function handleLogout(){
            setError("")
            try{
               await logout()
               history.push("/")
            }catch(error){
                setError(error.message)
            }

    }
    return (
        <div style={{backgroundImage:`url(${back})`}}>
            <Navbar></Navbar>
            <Container className="d-flex align-items-center jusitfy-content-center"
        style={{ minHeight: "90vh"}}>
                <div className="w-100" style={{ maxWidth: "1400px", height:"400px"}}>
                    <Card style={{backgroundColor:"#212529"}}>
                        <Card.Body>
                            <h2 style={{color:'gold'}} className="text-center mb-4">Profile</h2>
                            {error && <Alert variant="danger">{error}</Alert>}
                            <strong style={{color:'red'}}>Email : </strong> <h4 style={{color:'wheat'}}>{UserEmail}</h4>
                            <Link to="/Update-profile" className="btn btn-primary w-100 mt-3">Update Profile</Link>
                        </Card.Body>
                    </Card>
                    <div className="w-100 text-center mt-2">
                    <Button style={{backgroundColor:'#212529'}} variant="link" onClick={handleLogout}>Log Out</Button>
                    </div>
                </div>
            </Container>
        </div>
    )
}
