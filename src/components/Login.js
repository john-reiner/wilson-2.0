import React, {useState} from 'react'

import {Form, Button, Container, Row, Col, Image, Spinner} from 'react-bootstrap'
import SignUp from './SignUp';



export default function Login(props) {

    const [signUpShow, setSignUpShow] = useState(false)

    const handleSignUpClose = () => setSignUpShow(false);
    const handleSignUpShow = () => setSignUpShow(true);

    
    return (
        <div>
            <SignUp loginUser={props.loginUser} setLoggedinUserId={props.setLoggedinUserId} signUpShow={signUpShow} handleSignUpClose={handleSignUpClose}/>
            <Container style={{backgroundColor: '#333', color: 'white', padding: '3%'}}>
                <Row style={{marginBottom: "3%"}}>
                    <Col sm={4} style={{textAlign: "center"}}>   
                    <Image style={{height: "200px", width: "200px"}} src="wilson.png" rounded />
                    </Col>

                    <Col sm={8} style={{margin: 'auto 0'}}>
                        <h1>Welcome to <span style={{color: 'rgb(214, 17, 18)'}}>Wilson</span></h1>

                        <h5>A simple app to keep track of your goals</h5>
                    </Col>

                </Row>
                <Row>
                    <Col id='login-container'>
                        <Form onSubmit={props.handleSubmit} id='login-form'>
                            <Form.Group controlId="username">
                            <Form.Label>Username:</Form.Label>
                            <Form.Control type="username" placeholder="Enter username" name={'username'} value={props.username} onChange={props.handleUsernameChange} />
                            </Form.Group>
                            <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" name={'password'} value={props.password} onChange={props.handlePasswordChange} />
                            </Form.Group>
                            <div className="button-link-container">
                                {props.loggingIn ?   <Button variant="primary" disabled><Spinner as="span" animation="grow" size="sm" role="status" aria-hidden="true" /> Loading...</Button> : <Button id={'login-button'} variant="primary" type="submit">Login</Button>}
                                <Button variant="danger" onClick={handleSignUpShow}>Sign Up</Button>
                            </div>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    )
    
}
