import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import background from "../Image/blogbanner.jpg";

function Banner() {
  return (
    <Container fluid style={{ padding: 0 }}>
        <Row style={{ margin: 0 }}>
            <Col sm={12} style={{ padding: 0 }}>
                <div className='banner' style={{ position: "relative", height: "350px", backgroundImage:`url(${background})`, backgroundSize: "100% 100%", backgroundPosition: "center" }} title='PhotoBlog Banner Image'>
                    <div className="overlay"></div>
                </div>
            </Col>
        </Row>
    </Container>
  )
}

export default Banner