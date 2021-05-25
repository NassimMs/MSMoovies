import React from 'react'
import Navbar from "./Navbar"
import back from "../Ressources/bg.jpg"
import ControlledCarousel from "./Carousels"
import Footer from "./Footer"

const Home = () => {
    return (
        <div style={{backgroundImage:`url(${back})`}}>
            <Navbar></Navbar> 
            <ControlledCarousel></ControlledCarousel>
            <Footer></Footer>
        </div>
    )
}

export default Home