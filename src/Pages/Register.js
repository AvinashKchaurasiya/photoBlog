import React, { useState } from "react";
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import { Card, CardBody, CardHeader, Col, Container, Form, Row, Button } from 'react-bootstrap'
import addImage from '../Image/addImage.png';
import { Link } from "react-router-dom";


function Register() {

    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {

            const reader = new FileReader();
            reader.onloadend = () => {
                setSelectedImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleButtonClick = () => {
        const fileInput = document.getElementById('image-upload-input');
        fileInput.click();
    };

    const validateFirstName = () => {
        const fnameInput = document.getElementById('Fname').value;
        const fnameErrorMessage = document.getElementById('fname_sms');
        if (fnameInput.trim() === '') {
            fnameErrorMessage.textContent = '*';
            fnameErrorMessage.style.color = 'red';
        } else if (fnameInput.match(/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/)) {
            fnameErrorMessage.textContent = '';
        } else {
            fnameErrorMessage.textContent = 'Enter valid First Name';
            fnameErrorMessage.style.color = 'red';
        }
    };

    const validateLastName = () => {
        const lnameInput = document.getElementById('Lname').value;
        const lnameErrorMessage = document.getElementById('lname_sms');
        if (lnameInput.trim() === '') {
            lnameErrorMessage.textContent = '*';
            lnameErrorMessage.style.color = 'red';
        } else if (lnameInput.match(/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/)) {
            lnameErrorMessage.textContent = '';
        } else {
            lnameErrorMessage.textContent = 'Enter valid Last Name';
            lnameErrorMessage.style.color = 'red';
        }
    };

    const validateEmail = () => {
        const emailInput = document.getElementById('email').value;
        const emailErrorMessage = document.getElementById('email_sms');
        if (emailInput.trim() === '') {
            emailErrorMessage.textContent = '*';
            emailErrorMessage.style.color = 'red';
        } else if (emailInput.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)) {
            emailErrorMessage.textContent = '';
        } else {
            emailErrorMessage.textContent = 'Enter valid Email Address';
            emailErrorMessage.style.color = 'red';
        }
    };

    const validateNumber = () => {
        const numberInput = document.getElementById('number').value;
        const numberErrorMessage = document.getElementById('number_sms');
        if (numberInput.trim() === '') {
            numberErrorMessage.textContent = '*';
            numberErrorMessage.style.color = 'red';
        } else if (numberInput.match(/^\d{7,15}$/)) {
            numberErrorMessage.textContent = '';
        } else {
            numberErrorMessage.textContent = 'Enter valid Last Name';
            numberErrorMessage.style.color = 'red';
        }
    };

    const validatePassword = () => {
        const passwordInput = document.getElementById('password').value;
        const passwordErrorMessage = document.getElementById('password_sms');
        if (passwordInput.trim() === '') {
            passwordErrorMessage.textContent = '*';
            passwordErrorMessage.style.color = 'red';
        } else if (passwordInput.length >= 6) {
            passwordErrorMessage.textContent = '';
        } else {
            passwordErrorMessage.textContent = 'Create valid password';
            passwordErrorMessage.style.color = 'red';
        }
    };

    const validateCPassword = () => {
        const passwordInput = document.getElementById('password').value;
        const cPasswordInput = document.getElementById('cpass').value;
        const cPasswordErrorMessage = document.getElementById('cpass_sms');
        if (cPasswordInput.trim() === '') {
            cPasswordErrorMessage.textContent = '*';
            cPasswordErrorMessage.style.color = 'red';
        } else if (passwordInput === cPasswordInput) {
            cPasswordErrorMessage.textContent = 'Password Matched';
            cPasswordErrorMessage.style.color = 'green';
        } else {
            cPasswordErrorMessage.textContent = 'Password Not Matched';
            cPasswordErrorMessage.style.color = 'red';
        }
    };
    return (
        <div>
            <Header />

            <Container className="mb-5">
                <Row className='mt-5'>
                    <Col></Col>
                    <Col sm={8} md={8} lg={8}>
                        <Card style={{ boxShadow: 'rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px', border: 'none' }}>
                            <CardHeader>
                                <h5>Create Account </h5>
                            </CardHeader>
                            <CardBody>
                                <Form>
                                    <Row className='mb-4'>
                                        <Col>
                                            <Form.Label>First Name <span id="fname_sms"></span></Form.Label>
                                            <Form.Control type="text" placeholder="First name" name='fName' id='Fname' onKeyUp={validateFirstName} />
                                        </Col>
                                        <Col>
                                            <Form.Label>Last Name <span id="lname_sms"></span></Form.Label>
                                            <Form.Control type="text" placeholder="Last name" name='lName' id='Lname' onKeyUp={validateLastName} />
                                        </Col>
                                    </Row>
                                    <Row className='mb-4'>
                                        <Col>
                                            <Form.Label>Email <span id="email_sms"></span></Form.Label>
                                            <Form.Control type="email" placeholder="Enter Email" name='email' id='email' onKeyUp={validateEmail} />
                                        </Col>
                                    </Row>
                                    <Row className='mb-5'>
                                        <Col>
                                            <Form.Label>Number <span id="number_sms"></span></Form.Label>
                                            <Form.Control type="number" placeholder="Enter Number" name='number' id='number' onKeyUp={validateNumber} />
                                        </Col>
                                    </Row>
                                    <Row className='mb-5'>
                                        <Col>
                                            <Form.Label>Password <span id="password_sms"></span></Form.Label>
                                            <Form.Control type="password" placeholder="Create Your Password..." name='password' id='password' onKeyUp={validatePassword} />
                                        </Col>
                                        <Col>
                                            <Form.Label>Confirm Password <span id="cpass_sms"></span></Form.Label>
                                            <Form.Control type="password" placeholder="Re-enter your password..." name='cpass' id='cpass' onKeyUp={validateCPassword} />
                                        </Col>
                                    </Row>
                                    <Row className="mb-4">
                                        <Col>
                                            <Button onClick={handleButtonClick} style={{}}>
                                                <img src={addImage} alt="" style={{ width: '70px', height: '70px' }} />
                                            </Button>
                                            <Form.Control id="image-upload-input" type="file" accept="image/*" onChange={handleImageChange} style={{ display: 'none' }}
                                            />
                                        </Col>
                                        {selectedImage && (
                                            <Col>
                                                <img src={selectedImage} alt="Selected" style={{ maxWidth: '100%', maxHeight: '100px' }} />
                                            </Col>
                                        )}
                                    </Row>
                                    <Row className="mb-2">
                                        <Col>
                                            <Button variant="primary" className="w-100" type="submit">
                                                Register
                                            </Button>
                                        </Col>
                                    </Row>
                                    <div className="" style={{ display: 'flex', justifyContent: 'space-between' }}>
                                        <hr className="me-2" style={{ width: '48%' }} />
                                        <span className="me-2 pt-1" >OR</span>
                                        <hr style={{ width: '48%' }} />
                                    </div>
                                    <div className="">
                                        <p>Already have an account ? <Link to="../login">Login</Link></p>
                                    </div>
                                </Form>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col></Col>
                </Row>
            </Container>

            <div style={{ position: 'fixed', bottom: '0', width: '100%' }}>
                <Footer />
            </div>
        </div>
    )
}

export default Register