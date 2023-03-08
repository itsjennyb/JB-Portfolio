import React from 'react';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Navigation() {
  return (
    <Navbar bg="black" variant="dark">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/home">about</Nav.Link>
            <Nav.Link href="/portfolio">portfolio</Nav.Link>
            <Nav.Link href="/contact">contact</Nav.Link>
            <Nav.Link href="/resume">resume</Nav.Link>
            <Nav.Link href="https://www.buymeacoffee.com/jblac">buy me a coffee</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;