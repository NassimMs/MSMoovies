import React from 'react'
import {Navbar,Nav} from "react-bootstrap"
import {useAuth} from "../contexts/AuthContext"
import { FcVideoProjector } from "react-icons/fc";

const NavBar = () =>{
    const { CurrentUser } = useAuth()
    const isLogged = CurrentUser ? true : false
    const show = isLogged ? "block" : "none"
    const hide = !isLogged ? "block" : "none"
    const UserEmail = CurrentUser ? CurrentUser.email : ""
    return (
        <div>
           <Navbar fixed="top" bg="dark" variant="dark">
                <Navbar.Brand href="#home"><i><FcVideoProjector></FcVideoProjector> MSMoovies</i></Navbar.Brand>
                <Nav className="mr-auto">
                <Nav.Link href="/" style={{marginTop:"14px"}}>Home</Nav.Link>
                <Nav.Link href="#features" style={{marginTop:"14px"}}>Contact</Nav.Link>
                <Nav.Link href="/Login" style={{display: hide,marginTop:"14px"}}>Login</Nav.Link>
                <Nav.Link href="/Profile" style={{display:show,marginLeft:"330px"}}>
                Logged in as {UserEmail}</Nav.Link>
                </Nav>
            </Navbar>
        </div>
    )
}

export default NavBar
