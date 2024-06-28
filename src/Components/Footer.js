import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
// import { Route } from 'react-router-dom'

function Footer() {
  return (
    <Container fluid className='bg-dark'>
        <Row>
            <Col lg={12} sm={12} md={12}>
                <h6 className='text-center text-light p-3'>Designed and Developed By : Avinash Chaurasiya</h6>
            </Col>
        </Row>
    </Container>
  )
}

export default Footer