import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <div>
    <Navbar bg="dark" expand="lg" className="bg-body-tertiary ">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/">
                <Nav.Link >Home</Nav.Link>
            </Link>
            <Link to="/about">
                <Nav.Link >About</Nav.Link>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Navigation