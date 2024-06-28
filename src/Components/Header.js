import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
// import NavDropdown from 'react-bootstrap/NavDropdown';

function Header() {
  return (
    <>
        <Navbar collapseOnSelect expand="lg" className="menu bg-info">
            <Container fluid className='pe-5'>
                <Navbar.Brand className='logo' style={{ color:'white', fontFamily:'sans-serif', fontWeight:'bold',textTransform:'uppercase' }} title='PhotoBlog'>
                    <Link to="/" style={{ textDecoration : 'None' }}> <span style={{ color:'red' }}>Photo</span><span style={{color:'blue'}}>Blog</span></Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"  className='bg-white' style={{ borderColor:'white' }}/>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto justify-content-center" style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                        <Nav.Link className='navLink' title='Home'>Home</Nav.Link>
                        <Nav.Link className='navLink' title='About'>About</Nav.Link>
                        <Nav.Link className='navLink' title='Blogs'>Blogs</Nav.Link>
                    </Nav>
                    <Nav>
                        <Link to="/login" className='navLink btn btn-sm btn-outline-light' style={{ textDecoration : 'None',color:'white' }} title='Login'>Login</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar> 
    </>
  )
}

export default Header