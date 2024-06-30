import React from "react";
import blogData from "../BlogData/data";
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Col, Container, Row, Button, Card } from "react-bootstrap";

function Blogpost() {
  return (
    <Container fluid className="mb-5">
      <Row className="pt-5">
        <Col sm={12}>
          <Container>
            <Row>
              {blogData.map((blog) => (
                <Col key={blog.id} sm={3} lg={3} md={3} className="mb-2 d-flex">
                  <Card style={{ width: "20rem" }} className="flex-fill mb-2">
                    <Card.Img variant="top" src={blog.image} alt={ blog.name } title={ blog.name }/>
                    <Card.Body className="d-flex flex-column">
                        <Card.Title style={{ display : 'flex', justifyContent : 'space-between' }}>
                            <p style={{ fontSize: '1.2rem', fontWeight: 'bold' }} title={ blog.name }>{blog.name}</p>
                            <span disabled={true} style={{ fontSize:'0.8rem',paddingTop: '0.3rem' }}><i className="bi bi-stopwatch"></i> { blog.create } </span>
                        </Card.Title>
                        <Card.Text style={{ textAlign: "justify" }}>
                            {blog.desc.substring(0, 100)}...
                        </Card.Text>
                        <Card.Text style={{ fontSize: '0.9rem' }} title={ blog.user }><i className="bi bi-person"></i> {blog.user}</Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <Button variant="primary" className="w-100" title={ blog.name }>Read More</Button>
                    </Card.Footer>
                  </Card>
                </Col>
              ))}
            </Row>
          </Container>
        </Col>
      </Row>
    </Container>
  );
}

export default Blogpost;
