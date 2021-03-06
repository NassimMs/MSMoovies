import React, {useRef,useState} from 'react'
import {Form, Button, Card, Container,Alert} from 'react-bootstrap'
import {useAuth} from "../contexts/AuthContext"
import Navbar from "./Navbar"
import {Link,useHistory} from 'react-router-dom'

const Signup = () => {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const { signup } = useAuth()
    const [error,setError] = useState('')
    const [loading,setLoading] = useState(false)
    const history = useHistory()

   async function handleSubmit(e){
        e.preventDefault()
        if(passwordRef.current.value !== passwordConfirmRef.current.value){
            return setError('Passwords do not match ')
        }
        try{
            setError('')
            setLoading(true)
            await signup(emailRef.current.value,passwordRef.current.value)
            history.push("/")
        }catch(error){
            setError(error.message)
        }
        setLoading(false)

        
    }

    return (
        <>
        <Navbar></Navbar>
        <Container className="d-flex align-items-center jusitfy-content-center"
        style={{ minHeight: "90vh"}}>
            <div className="w-100" style={{ maxWidth: "1500px"}}>
                <Card>
                    <Card.Body>
                        <h2 className="text-center mb-4">Sign Up to MSMoovies</h2>
                        {error && <Alert variant="danger">{error}</Alert>}
                        <Form onSubmit={handleSubmit}>
                            <Form.Group id="email">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" ref={emailRef} required></Form.Control>
                            </Form.Group>
                            <Form.Group id="password">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" ref={passwordRef} required></Form.Control>
                            </Form.Group>
                            <Form.Group id="password-confirm">
                                <Form.Label>Password Confirmation</Form.Label>
                                <Form.Control type="password" ref={passwordConfirmRef} required></Form.Control>
                            </Form.Group>
                            <br/> 
                            <Button disabled={loading} className="w-100" type="submit">Sign Up</Button>
                        </Form>
                    </Card.Body>
                </Card>
                <div className="w-100 text-center mt-2">
                    Already Have an account ? <Link to="/Login">Login</Link>
                </div>
            </div>  
        </Container>
    </>
    )
}

export default Signup
