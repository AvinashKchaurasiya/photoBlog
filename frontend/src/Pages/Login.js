import React, { useState } from "react";
import Header from "../Components/Header";
import { Card, Col, Container, Row, Form, FormControl, Button } from "react-bootstrap";
import loginImage from '../Image/AuthImage/loginlogo.png';
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";

function Login() {
    const [showPassword, setShowPassword] = useState(false);

    const handleCheckboxChange = () => {
        setShowPassword(!showPassword); 
    };
    return (
        <div>
            <Header />
            <Container fluid>
                <Row>
                    <Col sm={12} md={12} lg={12}>
                        <Container style={{ marginTop: '10%' }}>
                            <Row>
                                <Col sm={3} md={3} lg={3}></Col>
                                <Col sm={6} md={6} lg={6} className="d-flex justify-content-center align-items-center">
                                    <Card className="p-3" style={{ boxShadow: 'rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px', border: 'none', width: '50rem' }}>
                                        <Card.Img variant="top" src={loginImage} alt="Login" title="Login" style={{ width: "100px", height: '100px', margin: 'auto', borderRadius: '20%', display: 'block' }} />
                                        <Card.Body>
                                            <Form>
                                                <Form.Group controlId="username" className="mb-2">
                                                    <Form.Label>User Name</Form.Label>
                                                    <FormControl type="text" placeholder="Enter User Name" name=""/>
                                                </Form.Group>
                                                <Form.Group controlId="password" className="mb-2">
                                                    <Form.Label>Password</Form.Label>
                                                    <FormControl type={showPassword ? 'text' : 'password'} placeholder="Enter Password" />
                                                </Form.Group>
                                                <Form.Group controlId="showPasswordCheckbox" className="mb-3" style={{ display: 'flex', justifyContent: 'space-between' }}>
                                                    <Form.Check type="checkbox" label={showPassword ? "Hide Password" : "Show Password"} onChange={handleCheckboxChange} />
                                                    <Link to="../forget-password">Forget Password</Link>
                                                </Form.Group>
                                                <Button variant="primary" className="w-100 mb-3" style={{ fontWeight: 'bold' }}>
                                                    <i className="bi bi-box-arrow-in-right"></i> Login
                                                </Button>
                                                <div className="" style={{ display: 'flex', justifyContent: 'space-between' }}>
                                                    <hr className="me-2" style={{ width:'48%' }}/>
                                                    <span className="me-2 pt-1" >OR</span>
                                                    <hr style={{ width:'48%' }}/>
                                                </div>
                                                <div className="">
                                                    <p>Don't have an account ? <Link to="../create-account">Create Account</Link></p>
                                                </div>
                                            </Form>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col sm={3} md={3} lg={3}></Col>
                            </Row>
                        </Container>
                    </Col>
                </Row>
            </Container>
            <div style={{ position: 'fixed', bottom:'0',width:'100%' }}>
                <Footer/>
            </div>
        </div>
    );
};

export default Login;

