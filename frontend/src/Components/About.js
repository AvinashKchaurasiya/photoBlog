import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'
import blogAboutImage from "../Image/AboutBlog.jpg";

function About() {
  return (
    <Container className='pt-5'>
        <Row>
            <Col sm={4}>
                <div className='aboutImage'>
                    <Card style={{ border:'none' }}>
                        <Card.Body>
                            <Card.Img variant="top" src={blogAboutImage} alt='About Image' title='Photo Blog About Image'/>
                        </Card.Body>
                    </Card>
                </div>
            </Col>
            <Col sm={8}>
                <div className='aboutContent p-3'>
                    <h3 className='logoName' style={{ fontFamily:'sans-serif', fontWeight:'bold', textTransform:'capitalize' }}>
                        About <span style={{ color:'red' }}>Photo</span><span style={{color:'blue'}}>Blog</span>
                    </h3>
                    <div className='p-5'>
                        <p style={{ textAlign:'justify' }}>
                            At <span style={{ color:'red', fontWeight:'bold' }}>Photo</span><span style={{color:'blue', fontWeight:'bold'}}>Blog</span>, we believe that every photograph has a story to tell. Founded by <span style={{ color:'red', fontWeight:'bold' }}>Apni</span><span style={{color:'blue', fontWeight:'bold'}}>Toli</span>, our mission is to capture fleeting moments and share them with the world. Whether it’s the serenity of a sunrise, the vibrant colors of urban life, or the candid expressions of people around the globe, we aim to evoke emotions and inspire through our photography.
                        </p>
                        <p style={{ textAlign:'justify' }}>
                            Our journey began mention how and when your passion for photography started. Since then, we have been dedicated to honing our craft and expanding our perspective through the lens. Each image we share is a testament to our commitment to capturing beauty, authenticity, and the essence of the moment.
                        </p>
                    </div>
                </div>
            </Col>
        </Row>
    </Container>
  )
}

export default About