import {Card,Button} from "react-bootstrap"
import {Link} from "react-router-dom"
import {useAuth} from "../contexts/AuthContext"

const Footer = () =>{
    const { CurrentUser } = useAuth()
    const isLogged = CurrentUser ? true : false
    let button
    if(!isLogged){
        button = <Link to="/Signup"><Button variant="primary">Check it out !</Button></Link>;
    }else{
        button = <Link to="/Movies"><Button variant="primary">Check Latest Movies</Button></Link>;
    }
    return (
        <footer>
            <Card className="text-center" style={{backgroundColor:"#212529"}}>
                <Card.Header style={{color:"white"}}>MSMoovies</Card.Header>
                <Card.Body>
                <Card.Title style={{color:"gold"}}>What is MSMoovies ?</Card.Title>
                    <Card.Text style={{color:"wheat"}}>
                    MSMoovies provides High Quality movies and user experience
                    </Card.Text>
                    {button}
                </Card.Body>
                <Card.Footer className="text-muted">Copyright MSMoovies &copy;2021</Card.Footer>
            </Card>
        </footer>
    )
}
export default Footer